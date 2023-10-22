import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [tabs, setTabs] = useState(1);
console.log(tabs)
  const ToggleTabs = (tabmenu) => {
    setTabs(tabmenu)
  };

  return (
    <div className="tabs">
      <div className="container">
        <div className="tabmenu">
          <ul>
            <li className={tabs===1 ? 'tabsmenus active-tab': 'tabsmenus'} onClick={()=> ToggleTabs(1)}>
              <Link>Tab-1</Link>
            </li>
            <li className={tabs===2 ? "tabsmenus active-tab": "tabsmenus"} onClick={()=> ToggleTabs(2)}>
              <Link>Tab-2</Link>
            </li>
            <li className={tabs===3 ? 'tabsmenus active-tab': 'tabsmenus'} onClick={()=> ToggleTabs(3)}>
              <Link>Tab-3</Link>
            </li>
            <li className={tabs===4 ? 'tabsmenus active-tab': 'tabsmenus'} onClick={()=> ToggleTabs(4)}>
              <Link>Tab-4</Link>
            </li>
            <li className={tabs===5 ? 'tabsmenus active-tab': 'tabsmenus'} onClick={()=> ToggleTabs(5)}>
              <Link>Tab-5</Link>
            </li>
            <li className={tabs===6 ? 'tabsmenus active-tab': 'tabsmenus'} onClick={()=> ToggleTabs(6)}>
              <Link>Tab-6</Link>
            </li>
          </ul>
          <div className="tabcontent">
            <p className={tabs===1 ? 'active-content color1': 'hidden-content'}>
            <span>Content Number: 1</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
            <p className={tabs===2 ? 'active-content color2': 'hidden-content'}>
            <span>Content Number: 2</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
            <p className={tabs===3 ? 'active-content color3': 'hidden-content'}>
            <span>Content Number: 3</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
            <p className={tabs===4 ? 'active-content color4': 'hidden-content'}>
            <span>Content Number: 4</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
            <p className={tabs===5 ? 'active-content color5': 'hidden-content'}>
            <span>Content Number: 5</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
            <p className={tabs===6 ? 'active-content color6': 'hidden-content'}>
                <span>Content Number: 6</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, aspernatur blanditiis! Earum praesentium quae
              voluptatum odio in accusamus autem minus sed qui assumenda,
              temporibus fugiat reprehenderit reiciendis. Odit, totam corrupti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
