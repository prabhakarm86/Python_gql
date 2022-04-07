import { RESTDataSource } from 'apollo-datasource-rest';

export class API extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://127.0.0.1:5000/';
  }

  async getAllEmps() {
    const response = await this.get('getallemp');
    return response.Employees
  }


  async getemp(id){
    const api='getemp/'+id
    const response = await this.get(api);
    return response.Employee 
  }


};