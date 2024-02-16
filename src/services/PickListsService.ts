import axios from "axios";
import { PickList } from "../models/picklist";
import { CaseDto } from "../models/case";

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
      const response = await fetch(
        "https://backduppla-prod.eba-mmjhxq8z.us-east-1.elasticbeanstalk.com/casos/picklists"
      );
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

  public async createCase(caseData: CaseDto): Promise<boolean> {
    try {
      const { data } = await axios.put(
        "https://backduppla-prod.eba-mmjhxq8z.us-east-1.elasticbeanstalk.com/casos",
        caseData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.mensaje === "Caso creado correctamente") {
        console.log("Case created successfully");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error creating case:", error);
      throw error;
    }
  }
}

export default PicklistService;
