//FormListView.js
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
	const navigate = useNavigate();

	const ManagerAccessToken =
		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5NTk1ODI1LCJqdGkiOiI1NWNmN2NmZDhmMzE0OWVjYTlhYTE3NDJmYjM2NThjZCIsInVzZXJfaWQiOjF9.Z7doEVWe6fKcKLXCXJvidgI2zQoNqdoEvqSnkQ0_XHo';
	useEffect(() => {
		const fetchData = async () => {
			try {
				console.log(
					'API 호출:',
					`${API_BASE_URL}${API_ENDPOINT}`
				);

				const response = await fetch(
					`${API_BASE_URL}${API_ENDPOINT}`,
					{
						headers: {
							Authorization: `Bearer ${ManagerAccessToken}`,
						},
					}
				);

				if (!response.ok) {
					if (response.status === 404) {
						throw new Error(
							'API 엔드포인트를 찾을 수 없습니다. URL을 확인해주세요.'
						);
					} else if (response.status === 401) {
						throw new Error(
							'인증되지 않았습니다. 액세스 토큰을 확인해주세요.'
						);
					} else if (response.status === 403) {
						throw new Error('접근 권한이 없습니다.');
					} else {
						throw new Error(
							`서버 응답 상태: ${response.status}`
						);
					}
				}

				const data = await response.json();
				console.log('Individual item structure:', data[0]); // Add this line to inspect the data structure
				setFormData(Array.isArray(data) ? data : []);
				setIsLoading(false);
			} catch (error) {
				console.error('데이터 가져오기 오류:', error);
				setError(error.message);
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);
	const getTrackName = (track) => {
		switch (track) {
			case 0:
				return '프론트엔드';
			case 1:
				return '백엔드';
			case 2:
				return '기획,디자인';
			default:
				return '지원자';
		}
	};
	const handleApplicationClick = (id, user_fullname) => {
		console.log('Clicked ID:', id, 'Name:', user_fullname);
		if (!id || typeof id !== 'number') {
			console.error('유효하지 않은 ID:', id);
			return;
		}
		navigate(`/appliance/submit/${id}`, {
			state: { user_fullname },
		});
	};

	return (
		<ViewPage>
			<Body>
				<Title>지원서 조회</Title>
				{isLoading && <LoadingText>로딩중...</LoadingText>}
				{error && <ErrorText>오류: {error}</ErrorText>}
				{formData.length === 0 && !isLoading && !error && (
					<NoDataText>데이터가 없습니다</NoDataText>
				)}
				{formData.map((item, index) => (
					<ViewBox
						key={index}
						user_fullname={item.user_fullname}
						track={getTrackName(item.track)}
						created_at={item.created_at}
						onClick={() =>
							handleApplicationClick(
								item.id,
								item.user_fullname
							)
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
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
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
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
	@media only screen and (max-width: 600px) {
		width: 80%;
	}
`;

const Title = styled.h1`
	display: flex;
	font-weight: 800;
	font-size: 34px;
	color: #212224;
	font-family: Pretendard;
	font-style: normal;
	line-height: normal;
	align-self: flex-start;
	margin-left: 10px;
	margin-top: 86px;
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;

const LoadingText = styled.div`
	color: #666;
	font-size: 18px;
	font-family: Pretendard;
	margin: 20px 0;
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;

const ErrorText = styled.div`
	color: #ff0000;
	font-size: 16px;
	margin: 20px 0;
	text-align: center;
	font-family: Pretendard;
	padding: 10px;
	background: #ffe6e6;
	border-radius: 8px;
	width: 100%;
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;

const NoDataText = styled.div`
	color: #666;
	font-size: 16px;
	margin: 20px 0;
	text-align: center;
	font-family: Pretendard;
	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
`;

//완성되고 아래 코드로 변경

//import React, { useEffect, useState } from 'react';
//import ViewBox from '../components/ViewBox';
//import styled from 'styled-components';
//import { useNavigate } from 'react-router-dom';

//const API_BASE_URL =
//	'https://woodzverse.pythonanywhere.com';
//const API_ENDPOINT = '/appliance/list/';

//const FormListView = () => {
//	const [formData, setFormData] = useState([]);
//	const [isLoading, setIsLoading] = useState(true);
//	const [error, setError] = useState(null);
//	const [isAuthorized, setIsAuthorized] = useState(false);
//	const navigate = useNavigate();

//	const ManagerAccessToken =
//		'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzM5NTk1ODI1LCJqdGkiOiI1NWNmN2NmZDhmMzE0OWVjYTlhYTE3NDJmYjM2NThjZCIsInVzZXJfaWQiOjF9.Z7doEVWe6fKcKLXCXJvidgI2zQoNqdoEvqSnkQ0_XHo';

//	useEffect(() => {
//		// 로컬 스토리지에서 토큰 확인
//		const userToken = localStorage.getItem('accessToken');

//		if (!userToken || userToken !== ManagerAccessToken) {
//			alert('접근 권한이 없습니다.');
//			navigate('/'); // 홈페이지나 로그인 페이지로 리다이렉트
//			return;
//		}

//		setIsAuthorized(true);
//		fetchData();
//	}, [navigate]);

//	const fetchData = async () => {
//		try {
//			console.log(
//				'API 호출:',
//				`${API_BASE_URL}${API_ENDPOINT}`
//			);

//			const response = await fetch(
//				`${API_BASE_URL}${API_ENDPOINT}`,
//				{
//					headers: {
//						Authorization: `Bearer ${ManagerAccessToken}`,
//					},
//				}
//			);

//			if (!response.ok) {
//				if (response.status === 404) {
//					throw new Error(
//						'API 엔드포인트를 찾을 수 없습니다. URL을 확인해주세요.'
//					);
//				} else if (response.status === 401) {
//					throw new Error(
//						'인증되지 않았습니다. 액세스 토큰을 확인해주세요.'
//					);
//				} else if (response.status === 403) {
//					throw new Error('접근 권한이 없습니다.');
//				} else {
//					throw new Error(
//						`서버 응답 상태: ${response.status}`
//					);
//				}
//			}

//			const data = await response.json();
//			console.log('받은 데이터:', data);
//			setFormData(Array.isArray(data) ? data : []);
//			setIsLoading(false);
//		} catch (error) {
//			console.error('데이터 가져오기 오류:', error);
//			setError(error.message);
//			setIsLoading(false);
//		}
//	};

//	const getTrackName = (track) => {
//		switch (track) {
//			case 0:
//				return '프론트엔드';
//			case 1:
//				return '백엔드';
//			case 2:
//				return '기획,디자인';
//			default:
//				return '지원자';
//		}
//	};

//	if (!isAuthorized) {
//		return null; // 권한이 없을 경우 아무것도 렌더링하지 않음
//	}
//const handleApplicationClick = (id) => {
//	navigate(`/application/${id}`);
//};

//return (
//	<ViewPage onClick={handleApplicationClick}>

//			<Body>
//				<Title>지원서 조회</Title>
//				{isLoading && <LoadingText>로딩중...</LoadingText>}
//				{error && <ErrorText>오류: {error}</ErrorText>}
//				{formData.length === 0 && !isLoading && !error && (
//					<NoDataText>데이터가 없습니다</NoDataText>
//				)}
//				{formData.map((item, index) => (
//					<ViewBox
//						key={index}
//						user_fullname={item.user_fullname}
//						track={getTrackName(item.track)}
//						created_at={item.created_at}
//					/>
//				))}
//			</Body>
//		</ViewPage>
//	);
//};

//export default FormListView;

//const ViewPage = styled.div`
//	background: #f2f4f6;
//	min-height: 100vh;
//`;

//const Body = styled.div`
//	display: flex;
//	min-width: 370px;
//	width: 30vw;
//	flex-direction: column;
//	justify-content: center;
//	align-items: center;
//	margin: auto;
//	gap: 10px;
//	padding: 20px 0;
//	&:lang(en) {
//		font-family: 'Noto Sans', sans-serif;
//	}
//	&:lang(ko) {
//		font-family: 'Pretendard', sans-serif;
//	}
//	@media only screen and (max-width: 600px) {
//		width: 80%;
//	}
//`;

//const Title = styled.h1`
//	display: flex;
//	font-weight: 800;
//	font-size: 34px;
//	color: #212224;
//	font-family: Pretendard;
//	font-style: normal;
//	line-height: normal;
//	align-self: flex-start;
//	margin-left: 10px;
//	margin-top: 86px;
//	&:lang(en) {
//		font-family: 'Noto Sans', sans-serif;
//	}
//	&:lang(ko) {
//		font-family: 'Pretendard', sans-serif;
//	}
//`;

//const LoadingText = styled.div`
//	color: #666;
//	font-size: 18px;
//	font-family: Pretendard;
//	margin: 20px 0;
//	&:lang(en) {
//		font-family: 'Noto Sans', sans-serif;
//	}
//	&:lang(ko) {
//		font-family: 'Pretendard', sans-serif;
//	}
//`;

//const ErrorText = styled.div`
//	color: #ff0000;
//	font-family: Pretendard;
//	font-size: 16px;
//	margin: 20px 0;
//	text-align: center;
//	padding: 10px;
//	background: #ffe6e6;
//	border-radius: 8px;
//	width: 100%;
//	&:lang(en) {
//		font-family: 'Noto Sans', sans-serif;
//	}
//	&:lang(ko) {
//		font-family: 'Pretendard', sans-serif;
//	}
//`;

//const NoDataText = styled.div`
//	color: #666;
//	 font-family: Pretendard;
//	font-size: 16px;
//	margin: 20px 0;
//	text-align: center;
//	&:lang(en) {
//		font-family: 'Noto Sans', sans-serif;
//	}
//	&:lang(ko) {
//		font-family: 'Pretendard', sans-serif;
//	}
//`;
