import React, {useRef, useEffect} from 'react';

export default function OutsideClickHandler({children, onClickOutside}) {
	const wrapperRef = useRef(null);

	function handleOutsideClick(e) {
		if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
			onClickOutside(e);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		return () => document.removeEventListener('mousedown', handleOutsideClick);
	}, []);

	return <span ref={wrapperRef}>{children}</span>;
}
