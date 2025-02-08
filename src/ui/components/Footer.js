import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Footerdiv>
			<Footcontacth>
				멋쟁이사자처럼 한국외대(서울) 이메일
			</Footcontacth>
			<Footcontacth>hufs_seoul@likelion.org</Footcontacth>
		</Footerdiv>
	);
};

export default Footer;

const Footerdiv = styled.div`
	position: bottom;
	background: #212224;
	height: 80px;
	justify-content: center;
	align-content: center;
	font-family: Pretendard;

	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;
const Footcontacth = styled.h3`
	color: #fff;
	text-align: center;
	font-family: Pretendard;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 2px;

	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;
