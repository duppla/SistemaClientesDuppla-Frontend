import { PickList } from "../models/picklist";

class PicklistService {
  private static instance: PicklistService;

  private constructor() {}

  public static getInstance(): PicklistService {
      if (!PicklistService.instance) {
          PicklistService.instance = new PicklistService();
      }
      return PicklistService.instance;
  }

  public async getPicklists(): Promise<PickList[]> {
      try {
          const response = await fetch('http://backduppla-prod.eba-mmjhxq8z.us-east-1.elasticbeanstalk.com/casos/picklists');
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data: PickList[] = await response.json();
          return data;
      } catch (error) {
          console.error("Error fetching picklists:", error);
          throw error;
      }
  }
}

export default PicklistService;