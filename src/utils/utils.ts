import { Objectives } from './constants';

//Transforms array of OKRs to 'Parent child' structure

const transformData = (okrData: any[]): any => {
  let transformedData: any[] = [];
  let categories: string[] = [];
  const transformOkrObject = (currentValue: any, index: number) => {

    //Fetching categories in single forEach only 

    if (!categories.includes(currentValue.category)) {
      categories.push(currentValue.category);
    }

    //transforming data to 'Parent child' structure

    if (!currentValue.parent_objective_id) {
      return transformedData.push(currentValue);
    }

    const indexOfParent = transformedData.findIndex(
      okr => okr.id === currentValue.parent_objective_id
    );

    if (indexOfParent > -1) {
      if (Objectives.CHILD_OBJECTIVES in transformedData[indexOfParent]) {
        return transformedData[indexOfParent][Objectives.CHILD_OBJECTIVES].push(currentValue);
      }
      return (transformedData[indexOfParent][Objectives.CHILD_OBJECTIVES] = [currentValue]);
    }
  }
  okrData.forEach(transformOkrObject);

  return { transformedData, categories }
}

export default transformData;

//filters OKR list according to category

export const filterOKRs = (allOKrs: any, category: string) => allOKrs.filter((okr: any) => { return okr.category === category });

