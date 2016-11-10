import {thinky} from './thinky';

export const Exercise = thinky.createModel('Exercise', {
  name: thinky.type.string().required(),
  type: thinky.type.string(),
  owner: thinky.type.string().required(),
  exercises: [{
    exercise: {
      name: thinky.type.string().required(),
      level: thinky.type.number(),
    },
  }],
});
