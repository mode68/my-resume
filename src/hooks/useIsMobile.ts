import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash/debounce';

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = useMemo(() => debounce(() => {
        setIsMobile(document.documentElement.clientWidth < 768);
    }, 250), []);

    useEffect(() => {
        window.addEventListener('resize', checkIfMobile);
        window.addEventListener('load', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
            window.removeEventListener('load', checkIfMobile);
        }
    }, [checkIfMobile]);

    return isMobile;
}

export default useIsMobile;