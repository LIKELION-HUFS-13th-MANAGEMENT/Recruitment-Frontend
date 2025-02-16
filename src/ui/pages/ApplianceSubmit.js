import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const ApplianceSubmit = () => {
	// 상태 관리
	const [applicationData, setApplicationData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [userInfo, setUserInfo] = useState(null); // 클릭한 지원자의 정보 상태

	// 라우터 훅
	const { id } = useParams();
	const navigate = useNavigate();

	// API 설정
	const API_BASE_URL = 'https://woodzverse.pythonanywhere.com';
	const numericId = Number(id);
	const API_ENDPOINT = `/appliance/submit/${numericId}/`;
	const API_INFO_ENDPOINT = '/member/info/';

	// FormListView에서 전달된 데이터

	useEffect(() => {
		const userToken = localStorage.getItem('access_token');

		if (!userToken) {
			alert('접근 권한이 없습니다. 로그인 후 이용해주세요.');
			navigate('/');
			return;
		}

		// 유저 정보 가져오는 함수
		const fetchUserInfo = async (userToken) => {
			try {
				const response = await fetch(`${API_BASE_URL}${API_INFO_ENDPOINT}`, {
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				});

				if (!response.ok) {
					throw new Error(`유저 정보 로드 실패: ${response.status}`);
				}

				const data = await response.json();
				setUserInfo(data);

				// 디버깅 로그 추가
				console.log('유저 정보 가져오기 성공:', data);
			} catch (error) {
				console.error('유저 정보 가져오기 오류:', error);
				setError(error.message);
			}
		};

		// 지원서 데이터 가져오는 함수
		const fetchApplicationData = async (userToken) => {
			try {
				const response = await fetch(`${API_BASE_URL}${API_ENDPOINT}`, {
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				});

				if (!response.ok) {
					throw new Error('지원서를 불러오는데 실패했습니다.');
				}

				const data = await response.json();
				setApplicationData(data);

				// 디버깅 로그 추가
				console.log('지원서 데이터 가져오기 성공:', data);
			} catch (error) {
				console.error('지원서 데이터 가져오기 오류:', error);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		// API 호출 실행
		fetchUserInfo(userToken);
		fetchApplicationData(userToken);
	}, [id, navigate]);

	// 지원 트랙 변환 함수
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

	if (isLoading) return <LoadingText>로딩중...</LoadingText>;
	if (error) return <ErrorText>{error}</ErrorText>;
	if (!applicationData) return <NoDataText>데이터가 없습니다</NoDataText>;

	return (
		<ViewPage>
			<Body>
				<Title>지원서 상세</Title>
				<QuestionSection>
					<InfoSection>
						<InfoLabel>
							<Names>{userInfo?.fullname || '이름 없음'}</Names>
							<Track>{getTrackName(applicationData.track)} 파트</Track>
						</InfoLabel>
						<InfoLabel>
							<InfoValue>전화번호: {userInfo?.phone || '정보 없음'}</InfoValue>
						</InfoLabel>
						<InfoLabel>
							<InfoValue>이메일: {userInfo?.email || '정보 없음'}</InfoValue>
						</InfoLabel>
						<InfoLabel>
							<InfoValue>학번: {userInfo?.student_number || '정보 없음'}</InfoValue>
							<InfoValue> {userInfo?.grade || '정보 없음'}학년</InfoValue>
						</InfoLabel>
						<InfoLabel>
							<InfoValue>전공: {userInfo?.major_1 || '정보 없음'}</InfoValue>
							<InfoValue>이중전공: {userInfo.major_2 || '정보 없음'}</InfoValue>
						</InfoLabel>
					</InfoSection>

					<Question>
						1. 멋쟁이사자처럼 대학에 지원하시게 된 이유를 작성해주세요. (500자 이내)
					</Question>
					<Answer>{applicationData.answer1}</Answer>

					<Question>
						2. 지원하신 파트를 선택한 이유와 관련된 경험을 작성해주세요. (500자 이내)
					</Question>
					<Answer>{applicationData.answer2}</Answer>

					<Question>
						3. 협업 또는 팀워크 경험과 맡은 역할, 성과를 작성해주세요. (500자 이내)
					</Question>
					<Answer>{applicationData.answer3}</Answer>

					<Question>
						4. (선택사항) 경험을 멋쟁이사자처럼 대학에서 어떻게 적용할 수 있을지 작성해주세요.
						(300자 이내)
					</Question>
					<Answer>{applicationData.answer4}</Answer>

					<Question>
						5. 좋은 개발자란 무엇인지, 그리고 그러한 개발자가 되기 위해 어떤 노력을 하고 싶은지
						작성해주세요. (500자 이내)
					</Question>
					<Answer>{applicationData.answer5}</Answer>

					<Question>6. 한 주에 몇 시간 정도 활동이 가능하신가요?</Question>
					<Answer6>
						{applicationData.canSpendTime ? '많은 시간 투자 가능' : '많은 시간 투자 불가능'}
					</Answer6>

					<Question>7. 개발/디자인 관련 블로그나 포트폴리오가 있다면 작성해 주세요.</Question>
					<Answer>
						<PortfolioLink
							href={applicationData.portfolio}
							target='_blank'
							rel='noopener noreferrer'
						>
							{applicationData.portfolio}
						</PortfolioLink>
					</Answer>
				</QuestionSection>
			</Body>
		</ViewPage>
	);
};

export default ApplianceSubmit;
const ViewPage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	min-height: 100vh;
	width: 100%;
	background-color: #f2f4f6;
	padding-top: 20px;
`;

const Body = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 90%;
	max-width: 800px; /* 데스크톱에서는 800px, 모바일에서는 90% */
	margin: auto;
	gap: 20px;
	padding: 20px;
	background: #fff; /* 흰색 배경 추가 */
	border-radius: 14px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */

	@media only screen and (max-width: 600px) {
		width: 95%;
		padding: 15px;
	}
`;

const Title = styled.h1`
	font-weight: 800;
	font-size: 28px;
	color: #212224;
	font-family: Pretendard;
	text-align: center;
	margin-top: 20px;

	@media only screen and (max-width: 600px) {
		font-size: 24px; /* 모바일에서 글씨 크기 줄이기 */
	}
`;
const InfoSection = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	background: #212224;
	border-radius: 14px;
	padding: 20px;
	margin: 20px 0;
	gap: 12px;

	@media only screen and (max-width: 600px) {
		padding: 15px;
	}
`;

const InfoLabel = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	flex-wrap: wrap;
	color: #fff;
	font-family: Pretendard;
	font-size: 16px;

	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

const InfoValue = styled.div`
	color: #fff;
	font-family: Pretendard;
	font-size: 15px;
	flex: 1;
	font-weight: 400;
	margin-bottom: 0;
	align-self: center;
	word-break: break-word;

	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
`;

const Names = styled.div`
	font-size: 23px;
	font-weight: 700;
	@media only screen and (max-width: 600px) {
		font-size: 20px;
	}
`;

const Track = styled.div`
	font-size: 18px;
	font-weight: 700;
	color: #ddd;
	text-align: right;
	padding-right: 20px;
	@media only screen and (max-width: 600px) {
		font-size: 16px; /* 작은 화면에서 크기 줄이기 */
	}
`;

const QuestionSection = styled.div`
	width: 90%;
	max-width: 700px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
	padding: 20px;

	@media only screen and (max-width: 600px) {
		padding: 15px;
		width: 90%;
	}
`;

const Question = styled.div`
	color: #212224;
	font-family: Pretendard;
	font-size: 18px;
	font-weight: 700;
	width: 100%;
	white-space: normal; /* 줄 바꿈 가능하도록 설정 */
	word-break: break-word;
	padding-bottom: 5px;

	@media only screen and (max-width: 600px) {
		font-size: 16px; /* 모바일에서 글씨 크기 줄이기 */
	}
`;

const Answer = styled.div`
	border-radius: 14px;
	background: #fff;
	width: 100%;
	min-height: 80px; /* 최소 높이 지정하여 짧은 답변도 보기 좋게 */
	padding: 18px;
	align-items: flex-start;
	gap: 10px;
	white-space: pre-wrap;
	word-break: break-word;
	line-height: 1.5;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* 답변 박스에 약간의 그림자 추가 */

	@media only screen and (max-width: 600px) {
		padding: 14px;
		width: 100%;
	}
`;

const Answer6 = styled.div`
	border-radius: 14px;
	background: #fff;
	width: 100%;
	min-height: 60px; /* 최소 높이 지정 */
	padding: 18px;
	align-items: flex-start;
	gap: 10px;
	white-space: pre-wrap;
	word-break: break-word;
	line-height: 1.5;
	color: #007aff;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}
	@media only screen and (max-width: 600px) {
		padding: 14px;
		width: 100%;
	}
`;

const PortfolioLink = styled.a`
	color: #007aff;
	text-decoration: none;
	word-break: break-all;

	&:hover {
		text-decoration: underline;
	}
`;

const LoadingText = styled.div`
	color: #666;
	font-size: 18px;
	text-align: center;
	padding: 40px;
	font-family: Pretendard;
`;

const ErrorText = styled.div`
	color: #ff0000;
	font-size: 16px;
	text-align: center;
	padding: 40px;
	font-family: Pretendard;
`;

const NoDataText = styled.div`
	color: #666;
	font-size: 16px;
	text-align: center;
	padding: 40px;
	font-family: Pretendard;
`;
