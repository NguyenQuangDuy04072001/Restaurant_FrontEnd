import { Api } from '../api/Api';
import axiosClient from '../api/axiosClient';

const businessTypeService = {
  getBusinessType: async () => {
    try {
      const response = await axiosClient.get(Api.BUSINESS_TYPE);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default businessTypeService;
