// our packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import InfiniteScroll from 'redux-infinite-scroll';
import {Spinner} from '../../components/spinner';
import _ from 'lodash';

import {getMenuAction, createMenuAction} from '../../store/actions';
import Menu from '../../components/draw';

const styles = require('./style.scss');

const mapStateToProps = (state) => ({
   menus: state.menus.menu,
   hasMore: state.menus.hasMore,
   loadingMore: state.menus.status === 'loading',
   route: state.routing.locationBeforeTransitions.pathname,
 });

const mapDispatchToProps = (dispatch) => ({
  doGetMenu: payload => dispatch(getMenuAction(payload)),
  navTo: Menu => dispatch(push(Menu)),
  createMenu: payload=> dispatch(createMenuAction(payload)),
});

const Create = ({ menus, doGetMenu, route, navTo, createMenu, hasMore, loadingMore}) => {
  let menuName;
  let menuLevel;

  const handleCreateMenu = (e) => {
    e.preventDefault();
    const name = menuName.value;
    const level = menuLevel.value;
    createMenu({name, level});
  };

  const onLoadMore = () => doGetMenu({
    skip: menus.length,
    limit: 10,
   });

   const style = {
     marginTop: '2%',
   };

  return (

      <div className="container" >
        <h1 className={`${styles.title}`}>Menus management </h1>
        <div className={`panel panel-default ${styles.container}`} >
            <div className="panel-footer " style={{backgroundColor: 'rgb(255, 255, 255)', border: 'none'}}>
            <input
              type="text"
              className="form-control"
              id="newName"
              placeholder="Menu name..."
              ref={(i) => { menuName = i; }}
            />
            <br/>
            <div >
              <input
                type="number"
                className="form-control"
                id="newName"
                placeholder="Menu level..."
                ref={(i) => { menuLevel = i; }}
              />
              <br/>
              <center>
                <button className="btn btn-default" onClick={handleCreateMenu}> Create Menu </button>
              </center>
              </div>
            </div>
        </div>
        {!hasMore && menus.length === 0 ?
          <div>No menus yet!</div> :
          <InfiniteScroll
          elementIsScrollable={false}
          loadMore={onLoadMore}
          hasMore={hasMore}
          loadingMore={loadingMore}
          loader={<Spinner />}
          >
            {menus.map( (obj, index) =>   <Menu key={index} menu={obj.name} level={obj.level} route={route} navTo={navTo} /> )}

          </InfiniteScroll>}

      </div>

    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
