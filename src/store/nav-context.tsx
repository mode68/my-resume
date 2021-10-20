import React, { useState } from 'react';
import sectionObj from '../models/sectionObj';

type NavContextObj = {
    sections: sectionObj[];
    addSection: (newSection: sectionObj) => void;
}

export const NavContext = React.createContext<NavContextObj>({
    sections: [],
    addSection: () => {}
})

const NavContextProvider: React.FC = (props) => {
    const [sections, setSections] = useState<sectionObj[]>([]);


    const addSectionHandler = (newSection: sectionObj) => {
        setSections((prevSections) => {
            return prevSections.concat(newSection)
        })
    }

    const contextValue: NavContextObj = {
        sections: sections,
        addSection: addSectionHandler
    }

    return <NavContext.Provider value={contextValue}>
        {props.children}
    </NavContext.Provider>
}

export default NavContextProvider;