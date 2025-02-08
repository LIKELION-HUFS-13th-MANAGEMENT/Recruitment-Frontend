//ApplianceSubmit.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router-dom';

const ApplianceSubmit = () => {
	const [applicationData, setApplicationData] =
		useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const { id } = useParams();
	const API_BASE_URL =
		'https://woodzverse.pythonanywhere.com';
	const numericId = Number(id);
	const API_ENDPOINT = `/appliance/submit/${numericId}/`;
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
					throw new Error(
						'지원서를 불러오는데 실패했습니다.'
					);
				}

				const data = await response.json();
				setApplicationData(data);
			} catch (error) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const location = useLocation();
	const user_fullname = location.state?.user_fullname;

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

	if (isLoading)
		return <LoadingText>로딩중...</LoadingText>;
	if (error) return <ErrorText>{error}</ErrorText>;
	if (!applicationData)
		return <NoDataText>데이터가 없습니다</NoDataText>;

	return (
		<ViewPage>
			<Body>
				<Title>지원서 상세</Title>

				<QuestionSection>
					<InfoSection>
						<InfoSection1>
							<InfoLabel>
								이름
								<InfoValue>{user_fullname}</InfoValue>
							</InfoLabel>
							<InfoValue>
								{getTrackName(applicationData.track)} 파트
							</InfoValue>
						</InfoSection1>
					</InfoSection>

					<Question>
						1. 동아리에 지원하게 된 계기를 작성해 주세요.
					</Question>
					<Answer>{applicationData.answer1}</Answer>

					<Question>
						2. 관련 경험이 있다면 작성해 주세요.
					</Question>
					<Answer>{applicationData.answer2}</Answer>

					<Question>
						3. 동아리에서 하고 싶은 활동을 작성해 주세요.
					</Question>
					<Answer>{applicationData.answer3}</Answer>

					<Question>
						4. 개발/디자인 관련 블로그나 포트폴리오가 있다면
						작성해 주세요.
					</Question>
					<Answer>
						<PortfolioLink
							href={applicationData.portfolio}
							target='_blank'
							rel='noopener noreferrer'
						>
							{applicationData.portfolio}
						</PortfolioLink>
					</Answer>

					<Question>
						5. 한 주에 몇 시간 정도 활동이 가능하신가요?
					</Question>
					<Answer>
						{applicationData.canSpendTime
							? '활동 가능'
							: '활동 불가능'}
					</Answer>
				</QuestionSection>
			</Body>
		</ViewPage>
	);
};

export default ApplianceSubmit;

const ViewPage = styled.div`
	background-color: #f2f4f6;
	min-height: 100vh;
`;

const Body = styled.div`
	display: flex;
	min-width: 370px;
	width: 30vw;
	flex-direction: column;
	justify-content: flex-start;
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

const InfoSection = styled.div`
	width: 100%;
	background: #212224;
	border-radius: 14px;
	padding: 20px;
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
`;
const InfoSection1 = styled.div`
	/*justify-content: space-around;*/
`;

const InfoLabel = styled.div`
	display: flex;
	gap: 20px;
	color: #fff;
	font-family: Pretendard;
	font-size: 16px;
	font-weight: 700;
	margin-bottom: 8px;
`;

const InfoValue = styled.div`
	color: #fff;
	font-family: Pretendard;
	font-size: 16px;
	margin-bottom: 16px;

	&:last-child {
		margin-bottom: 0;
	}
`;

const QuestionSection = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Question = styled.div`
	color: #212224;
	font-family: Pretendard;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	display: flex;
	align-self: flex-start;
`;

const Answer = styled.div`
	border-radius: 14px;
	background: #fff;
	display: flex;
	min-width: 320px;
	width: 100%;
	height: auto;
	padding: 18px;
	align-items: flex-start;
	gap: 10px;
	margin-bottom: 20px;
	white-space: pre-wrap;
	word-break: break-word;
	line-height: 1.5;

	&:lang(en) {
		font-family: 'Noto Sans', sans-serif;
	}
	&:lang(ko) {
		font-family: 'Pretendard', sans-serif;
	}

	@media only screen and (max-width: 600px) {
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
