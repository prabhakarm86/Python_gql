import { API } from '../datasource.js';

export const Query= {
    emps: (root, args, { dataSources }) => dataSources.API.getAllEmps(),
    emp: (root, { id }, { dataSources }) => dataSources.API.getemp(id)
  }