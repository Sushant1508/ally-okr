import React from "react";
import OkrComponent from './OkrComponent';
import { OKR_TYPE } from '../utils/constants';

const OkrListComponent = ({ okrList }: any) => (
  <React.Fragment>
    {okrList.map((okrData: OKR_TYPE, index: number) =>
      <OkrComponent key={`key=${index}`} okrData={okrData} sequenceNumber={index} />
    )}
  </React.Fragment>
);

export default OkrListComponent;
