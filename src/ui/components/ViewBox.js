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
	user_student_number,
	major1,
	major2,
	grade,
	phone,
}) => {
	return (
		<Box onClick={onClick}>
			<PerIcon />
			<Inform>
				<Apliname>
					<Name>{user_fullname}</Name>
					<Column>{grade}학년</Column>
					{/*<Column>{user_student_number}</Column>*/}
				</Apliname>
				<Apliname>
					<Column> {phone}</Column>
					<Column2>
						<Major>전공: {major1}</Major>
						<Major>부전공: {major2}</Major>
					</Column2>
				</Apliname>
				<Aplipart>
					{getTrackName(track)} 파트
					<Date>{created_at}</Date>
				</Aplipart>{' '}
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
	flex-direction: column;
	color: #fff;
	font-family: Pretendard;
	width: 90%;
	padding-top:15px;
	padding-bottom:10px;
	justify-content: space-between;
  @media only screen and (max-width: 600px) {
		width: 80%;
		/
	}
	`;
const Apliname = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const Name = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;
	font-size: 20px;
	font-weight: 700;
`;
const Column = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	font-size: 14px;
	font-weight: 500;
`;
const Major = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	font-size: 14px;
	font-weight: 500;
`;
const Column2 = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	font-size: 14px;
	/*gap: 20px;*/
	font-weight: 500;
`;
const Aplipart = styled.div`
	margin-top: 10px;
	color: #fff;
	font-family: Pretendard;
	font-size: 14px;
	font-weight: 500;
	display: flex;
	width: 100%;
	justify-content: space-between;
`;
const Date = styled.div`
	color: #fff;
	text-align: right;
	font-family: Pretendard;
	font-size: 14px;
	font-weight: 500;
`;
