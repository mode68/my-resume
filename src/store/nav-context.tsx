import React, { useState } from 'react';
import { SectionObj } from '../models/sectionObj';

type NavContextObj = {
    sections: SectionObj[];
    addSection: (newSection: SectionObj) => void;
}

export const NavContext = React.createContext<NavContextObj>({
    sections: [],
    addSection: () => {}
})

const NavContextProvider: React.FC = (props) => {
    const [sections, setSections] = useState<SectionObj[]>([]);


    const addSectionHandler = (newSection: SectionObj) => {
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