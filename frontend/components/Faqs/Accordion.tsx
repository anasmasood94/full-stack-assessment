import React, { useState, useEffect } from "react";
import axios from "axios";

interface AccordianItem {
  id: number;
  attributes: {
    content: string;
    label: string;
  };
}

export default function Accordion() {
  const [active, setActive] = useState<Number[]>([]);
  const [rearrangeItems, isRearrangeitems] = useState(true);
  const [accordianData, setAccordianData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/faqs").then(({ data }) => {
      setAccordianData(data?.data);
    });
  }, []);

  const toggleElement = (el: number): any => {
    if (active.includes(el)) {
      const expandedItems = active;
      expandedItems.splice(expandedItems.indexOf(el), 1);
      setActive(expandedItems);
      isRearrangeitems(!rearrangeItems);
    } else {
      setActive([...active, el]);
    }
  };

  return (
    <div className="accordion">
      {accordianData?.map((item: AccordianItem) => {
        return (
          <div className={`contentBx ${active.includes(item?.id) && "active"}`}>
            <div className="label" onClick={(e) => toggleElement(item?.id)}>
              {item?.attributes?.label}
            </div>
            <div className="content">{item?.attributes?.content}</div>
          </div>
        );
      })}
    </div>
  );
}
