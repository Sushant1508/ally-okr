import React from "react";
import { useState } from "react";
import arroRight from '../assets/arrow_right.png';
import './styles/OkrComponent.css';
import { OKR_TYPE } from '../utils/constants';

const OkrComponent = ({ okrData, sequenceNumber }: any) => {
    const [isExpanded, toggleView] = useState(true);
    return (
        <React.Fragment>
            <div className="okrWrapper">
                <div className="okrHeader" onClick={() => toggleView(!isExpanded)}>
                    <div className="okrFeaderContentWrapper" >
                        <div className="okrIconWidth">
                            {headerImage(isExpanded)}
                        </div>
                        <div>
                            {renderTitle(sequenceNumber + 1, okrData.title)}
                        </div>
                    </div>
                </div>
                {isExpanded && okrData?.child_objectives?.length > 0 &&
                    <div className="okrExpandedContainer">
                        {okrData.child_objectives.map((childData: OKR_TYPE, index: number) => renderTitle(`${String.fromCharCode(index + 65)}. `, childData.title, index + 1))}
                    </div>
                }
            </div>
        </React.Fragment>
    );
};

export default OkrComponent;


const renderTitle = (prefix: string | number, title: string, keyOrder?: number) => {
    if (keyOrder)
        return <div key={keyOrder} className={isEven(keyOrder) ? "okrExpandedRowEven" : "okrExpandedRowOdd"}>{`${prefix} ${title}`}</div>
    return <div key={keyOrder}>{`${prefix}. ${title}`}</div>
}

const isEven = (keyOrder: number): boolean => keyOrder % 2 === 1;

const headerImage = (isExpanded: boolean) => {
    return <img src={arroRight} alt="" className={isExpanded ? "okrIconExpanded" : "okrIconColapsed"}></img>
}