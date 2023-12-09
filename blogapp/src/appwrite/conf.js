import { Client, Databases, Storage, ID } from "appwrite";
import config from "../envConfig/config";

export class Service{
  client = new Client();
  databases;
  bucket;

  constructor(){
    this.client.setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client);
  }
}

const service = new Service()

export default service