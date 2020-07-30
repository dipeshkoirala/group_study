import { ActionTypes } from "./Types";
import { data as phData } from "./placeholder";

export const loadData = (dataType) => ({
  type: ActionTypes.DATA_LOAD,
  payload: {
    dataType: dataType,
    data: phData[dataType],
  },
});
