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

  async createPost({title, slug, content, featuredImage, status, userId}){
    try {
      return await this.databases.createDocument(config.appwriteDbId, config.appwriteCollectionId,slug, {
        title,
        content,
        featuredImage, 
        status,
        userId
      })
    } catch (error) {
      return error
    }
  }

  async updatePost(slug, {title, content, featuredImage, status}){
    try {
      return await this.databases.updateDocument(conf.appwriteDbId, conf.appwriteCollectionId, slug, {
        title,
        content,
        featuredImage, 
        status,
      })
    } catch (error) {
      throw error
    }
  }
}

const service = new Service()

export default service