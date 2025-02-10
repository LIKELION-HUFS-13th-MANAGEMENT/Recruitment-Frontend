//ViewBox.js
import React from 'react';
import styled from 'styled-components';

const getTrackName = (track) => {
	switch (track) {
		case 0:
			return '프론트엔드';
		case 1:
			return '백엔드';
		case 2:
			return '기획/디자인';
		default:
			return '지원자';
	}
};

const ViewBox = ({
	user_fullname,
	track,
	created_at,
	onClick,
}) => {
	return (
		<Box onClick={onClick}>
			<PerIcon />
			<Inform>
				<Apliname>
					{user_fullname}
					<Aplipart>
						{getTrackName(track)} 파트
					</Aplipart>{' '}
					{/* 🔥 변환된 값 출력 */}
				</Apliname>
				<Date>{created_at}</Date>
			</Inform>
		</Box>
	);
};

export default ViewBox;

const Box = styled.div`
	display: flex;
	min-width: 370px;
	width: 30vw;
	height: 87px;
	padding: 22px 24px;
	border-radius: 20px;
	background: #212224;
	color: white;
	align-content: center;
	align-items: center;
	gap: 18px;
	margin-bottom: 5px;
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
	@media only screen and (max-width: 600px) {
		min-width: 80vw;
		height: 12vw;
	}
`;
const PerIcon = styled.div`
	display: flex;
	border-radius: 50px;
	background-color: #ed802f;
	width: 30px;
	height: 30px;
`;
const Inform = styled.div`
	display: flex;
	flex-direction: row;
	color: #fff;
	font-family: Pretendard;
	font-size: 18px;
	font-weight: 700;
	width: 90%;
	justify-content: space-between;
  @media only screen and (max-width: 600px) {
		width: 80%;
/
	}
`;
const Apliname = styled.div`
	display: flex;
	flex-direction: column;
`;
const Aplipart = styled.div`
	margin-top: 5px;
	color: #fff;
	font-family: Pretendard;
	font-size: 14px;
	font-weight: 500;
`;
const Date = styled.div`
	color: #fff;
	text-align: right;
	font-family: Pretendard;
	font-size: 14px;
	font-weight: 500;
`;
