import axios from "axios";
import { PickList } from "../models/picklist";
import { CaseDto } from "../models/case";

export interface CheckVideosDTO {
  document_number: string;
  document_type: string;
  id_video: string;
  ip_address: string;

  webkit: string;
  screen_resolution: string;
  browser: string;
}

class PicklistService {
  private static instance: PicklistService;

  private constructor() {}

  public static getInstance(): PicklistService {
    if (!PicklistService.instance) {
      PicklistService.instance = new PicklistService();
    }
    return PicklistService.instance;
  }

  public async postFingerprintVideo(data: CheckVideosDTO): Promise<boolean> {
    try {
      const response = await axios.post(
        "https://back.duppla.co/user/seen_video",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error creating fingerprint:", error);
      throw error;
    }
  }

  public async getPicklists(): Promise<PickList[]> {
    try {
      const response = await fetch("https://back.duppla.co/casos/picklists");
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
        "https://back.duppla.co/casos",
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
