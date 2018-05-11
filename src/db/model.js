/**
 * This file handles the model/models for
 * the perticular microservice
 */

import Joi from 'joi';

export const LessonModel = Joi.object({
  index: Joi.number().integer(),
  day: Joi.string(),
  teacherId: Joi.string(),
  roomId: Joi.string(),
  classId: Joi.string(),
  subjectId: Joi.string(),
  timeStart: Joi.string(),
  timeEnd: Joi.string()
}).required();

export const LessonModelRequired = Joi.object({
  index: Joi.number().integer().required(),
  day: Joi.string().required(),
  teacherId: Joi.string().required(),
  roomId: Joi.string().required(),
  classId: Joi.string().required(),
  subjectId: Joi.string().required(),
  timeStart: Joi.string().required(),
  timeEnd: Joi.string().required()
}).required();
