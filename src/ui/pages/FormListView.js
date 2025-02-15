import React, { useEffect, useState } from 'react';
import ViewBox from '../components/ViewBox';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL =
	'https://woodzverse.pythonanywhere.com';
const API_LIST_ENDPOINT = '/appliance/list/';
const API_INFO_ENDPOINT = '/member/info/';

const FormListView = () => {
	const [formData, setFormData] = useState([]);
	const [userInfo, setUserInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isAuthorized, setIsAuthorized] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const userToken = localStorage.getItem('access_token');

		if (!userToken) {
			alert(
				'접근 권한이 없습니다. 로그인 후 이용해주세요.'
			);
			navigate('/');
			return;
		}

		setIsAuthorized(true);
		fetchUserInfo(userToken);
		fetchData(userToken);
	}, [navigate]);

	const fetchUserInfo = async (userToken) => {
		try {
			//console.log('Fetching user info...'); // 디버깅 로그 추가
			const response = await fetch(
				`${API_BASE_URL}${API_INFO_ENDPOINT}`,
				{
					headers: { Authorization: `Bearer ${userToken}` },
				}
			);

			if (!response.ok) {
				throw new Error(
					`유저 정보 로드 실패: ${response.status}`
				);
			}

			const data = await response.json();
			//console.log('User Info Response:', data); // 응답 데이터 확인
			setUserInfo(data);
		} catch (error) {
			//console.error('유저 정보 가져오기 오류:', error);
			//setError(error.message);
		}
	};

	const fetchData = async (userToken) => {
		try {
			//console.log('Fetching applications list...'); // 디버깅 로그 추가
			const response = await fetch(
				`${API_BASE_URL}${API_LIST_ENDPOINT}`,
				{
					headers: { Authorization: `Bearer ${userToken}` },
				}
			);

			if (!response.ok) {
				throw new Error();
				//`서버 응답 상태: ${response.status}`
			}

			const data = await response.json();
			//console.log('Applications List Response:', data); // 응답 데이터 확인
			setFormData(Array.isArray(data) ? data : []);
			setIsLoading(false);
		} catch (error) {
			//console.error('데이터 가져오기 오류:', error);
			//setError(error.message);
			//setIsLoading(false);
		}
	};
	const filteredData = formData.filter(
		(item) => item.user_fullname !== null
	);
	const handleApplicationClick = (item) => {
		navigate(`/appliance/submit/${item.id}`, {
			state: {
				user_fullname: item.user_fullname,
				track: item.track,
			},
		});
	};

	if (!isAuthorized) return null;

	return (
		<ViewPage>
			<Body>
				<Title>지원서 조회</Title>
				{isLoading && <LoadingText>로딩중...</LoadingText>}
				{error && <ErrorText>오류: {error}</ErrorText>}
				{formData.length === 0 && !isLoading && !error && (
					<NoDataText>데이터가 없습니다</NoDataText>
				)}
				{filteredData.map((item, index) => (
					<ViewBox
						key={index}
						user_fullname={item.user_fullname} // 지원자 이름
						track={item.track} // 지원 트랙
						created_at={item.created_at} // 생성 날짜
						student_number={
							item.user_student_number ?? '학번 없음'
						} // 유저 학번
						onClick={() => handleApplicationClick(item)}
					/>
				))}
			</Body>
		</ViewPage>
	);
};

export default FormListView;

const ViewPage = styled.div`
	background: #f2f4f6;
	min-height: 100vh;
`;

const Body = styled.div`
	display: flex;
	min-width: 370px;
	width: 30vw;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	gap: 10px;
	padding: 20px 0;
`;

const Title = styled.h1`
	display: flex;
	font-weight: 800;
	font-size: 34px;
	color: #212224;
	margin-left: 10px;
	margin-top: 86px;
`;

const LoadingText = styled.div`
	color: #666;
	font-size: 18px;
	margin: 20px 0;
`;

const ErrorText = styled.div`
	color: #ff0000;
	font-size: 16px;
	margin: 20px 0;
	text-align: center;
	padding: 10px;
	background: #ffe6e6;
	border-radius: 8px;
	width: 100%;
`;

const NoDataText = styled.div`
	color: #666;
	font-size: 16px;
	margin: 20px 0;
	text-align: center;
`;
