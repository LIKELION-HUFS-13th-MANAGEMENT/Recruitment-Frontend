import React, { useEffect, useState } from 'react';
import ViewBox from '../components/ViewBox';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL =
	'https://woodzverse.pythonanywhere.com';
const API_ENDPOINT = '/appliance/list/';

const FormListView = () => {
	const [formData, setFormData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isAuthorized, setIsAuthorized] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		// 🔥 로컬 스토리지에서 access_token 가져오기
		const userToken = localStorage.getItem('access_token');
		console.log('User Token:', userToken); // 디버깅용 콘솔 로그

		if (!userToken) {
			alert(
				'접근 권한이 없습니다. 로그인 후 이용해주세요.'
			);
			navigate('/'); // 로그인 페이지로 이동
			return;
		}

		setIsAuthorized(true);
		fetchData(userToken); // 유저 토큰을 이용해 API 요청
	}, [navigate]);

	//API 요청 시 로그인한 유저의 토큰을 사용하도록 수정
	const fetchData = async (userToken) => {
		try {
			console.log(
				'API 호출:',
				`${API_BASE_URL}${API_ENDPOINT}`
			);

			const response = await fetch(
				`${API_BASE_URL}${API_ENDPOINT}`,
				{
					headers: { Authorization: `Bearer ${userToken}` }, //여기서 userToken 사용
				}
			);

			if (!response.ok) {
				throw new Error(
					`서버 응답 상태: ${response.status}`
				);
			}

			const data = await response.json();
			setFormData(Array.isArray(data) ? data : []);
			setIsLoading(false);
		} catch (error) {
			console.error('데이터 가져오기 오류:', error);
			setError(error.message);
			setIsLoading(false);
		}
	};

	if (!isAuthorized) return null;

	return (
		<ViewPage>
			<Body>
				<Title>지원서 조회</Title>
				{isLoading && <LoadingText>로딩중...</LoadingText>}
				{error && (
					<ErrorText>오류: 접근 권한이 없습니다.</ErrorText>
				)}
				{/*{error && <ErrorText>오류: {error}</ErrorText>}*/}
				{formData.length === 0 && !isLoading && !error && (
					<NoDataText>데이터가 없습니다</NoDataText>
				)}
				{formData.map((item, index) => (
					<ViewBox
						key={index}
						user_fullname={item.user_fullname}
						track={item.track}
						created_at={item.created_at}
						onClick={() =>
							navigate(`/appliance/submit/${item.id}`)
						}
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
