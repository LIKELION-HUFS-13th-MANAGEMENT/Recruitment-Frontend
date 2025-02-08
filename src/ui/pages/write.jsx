import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/writeStyles";

const Write = () => {
    const [formData, setFormData] = useState({
        track: 0,
        answer1:"",
        answer2:"",
        answer3:"",
        answer4:"",
        answer5:"",
        canSpendTime: "True",
        portfolio:""
    });

    const [isEditMode, setIsEditMode] = useState(false);  
    const [applicationId, setApplicationId] = useState(null); 
    const accessToken = localStorage.getItem('access_token');

    useEffect(() => {
        const savedFormData = localStorage.getItem('submittedFormData');
        const savedApplicationId = localStorage.getItem('applicationId');

        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
        if (savedApplicationId) {
            setApplicationId(savedApplicationId);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        const newFormData = {
            ...formData,
            [name]: type === "radio" ? value : value
        };
        setFormData(newFormData);
        localStorage.setItem('submittedFormData', JSON.stringify(newFormData));
    };

    const handleTrackChange = (e) => {
        const newFormData = {
            ...formData,
            track: parseInt(e.target.value)
        };
        setFormData(newFormData);
        localStorage.setItem('submittedFormData', JSON.stringify(newFormData));
    };


    const TextboxHeight = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const handleSubmit = async () => {
        const accessToken = localStorage.getItem('access_token');
    
        if (!accessToken) {
            alert("로그인이 필요합니다.");
            return;
        }
    
        console.log("Access Token:", accessToken); 
    
        try {
            const response = await axios.post(
                "https://woodzverse.pythonanywhere.com/appliance/apply/",
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
    
            if (response.status === 201) {
                alert("제출이 완료되었습니다!");
                setApplicationId(response.data.id); 
                localStorage.setItem('submittedFormData', JSON.stringify(formData));
                localStorage.setItem('applicationId', response.data.id);
                console.log(response.data);
            }
        } catch (error) {
            console.error("제출 중 오류 발생:", error);
    
            if (error.response) {
                if (error.response.status === 400 && error.response.data.error === "이미 신청서를 작성하셨습니다.") {
                    alert("이미 신청서를 작성하셨습니다.");
                } else if (error.response.status === 401) {
                    alert("인증 오류: 다시 로그인해주세요.");
                } else {
                    alert("제출에 실패했습니다. 다시 시도해주세요.");
                }
            } else {
                alert("서버와의 연결에 문제가 발생했습니다.");
            }
        }
    };
    
    const handleEdit = async () => {
        if (!accessToken || !applicationId) {
            alert("수정할 지원서가 없습니다.");
            return;
        }

        try {
            const response = await axios.put(
                `https://woodzverse.pythonanywhere.com/appliance/edit/${applicationId}/`,
                formData,
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                alert("수정이 완료되었습니다!");
                localStorage.setItem('submittedFormData', JSON.stringify(formData));
                console.log(response.data);
            }
        } catch (error) {
            console.error("수정 중 오류 발생:", error);
            alert("수정에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return(
        <>
        <W.Container>
        <W.Title>
            <W.TitleContent>지원서 작성</W.TitleContent>
        </W.Title>
        <W.Content>
            <W.Track>
                <W.Choice>
                    <W.ChoiceInput 
                        type="radio" 
                        name="track" 
                        value="0" 
                        checked={formData.track === 0}
                        onChange={handleTrackChange}/> 프론트엔드
                </W.Choice>
                <W.Choice>
                    <W.ChoiceInput 
                        type="radio" 
                        name="track" 
                        value="1" 
                        checked={formData.track === 1}
                        onChange={handleTrackChange}/> 백엔드
                </W.Choice>
                <W.Choice>
                    <W.ChoiceInput 
                        type="radio" 
                        name="track" 
                        value="2"
                        checked={formData.track === 2}
                        onChange={handleTrackChange}/> 기획/디자인
                </W.Choice>
            </W.Track>
            <W.One>
                <W.OTitle>1. 멋쟁이사자처럼 대학에 지원하시게 된 이유를 작성해주세요. (500자 이내)</W.OTitle>
                <W.OContent>
                    <W.Textarea
                        name="answer1"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer1}
                    />
                </W.OContent>
            </W.One>
            <W.Two>
                <W.TwTitle>2. 지원하신 파트를 선택한 이유와 관련 경험을 해본 적이 있는지, <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그리고 이 파트를 통해 어떠한 성장을 희망하시는지 작성해주세요. <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(500자 이내)</W.TwTitle>
                <W.TwContent>
                    <W.Textarea
                        name="answer2"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer2}
                    />
                </W.TwContent>
            </W.Two>
            <W.Three>
                <W.ThTitle>3. 멋쟁이 사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다. <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;지원자 본인이 협업 또는 팀워크를 진행해 보았던 경험을 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자신이 맡았던 역할 및 협업의 성과를 위주로 작성해주세요. (500자 이내)</W.ThTitle>
                <W.ThContent>
                    <W.Textarea
                        name="answer3"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer3}
                    />
                </W.ThContent>
            </W.Three>
            <W.Four>
                <W.FoTitle>4. (선택사항) 경험을 멋쟁이사자처럼 대학에서 어떻게 적용할 수 있을지 작성해주세요. (300자 이내)</W.FoTitle>
                <W.FoContent>
                    <W.Textarea
                        name="answer4"
                        maxLength="300"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer4}
                    />
                </W.FoContent>
            </W.Four>
            <W.Five>
                <W.FiTitle>5-1. 프론트엔드/백엔드 트랙 질문<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;좋은 개발자는 무엇이라고 생각하시나요? <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그리고 그러한 개발자가 되기 위해 지원자님께서 현재 혹은 미래에 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;어떠한 노력을 기울이고 싶으신지 작성해주세요. (500자 이내)</W.FiTitle>
                <W.FiContent>
                    <W.Textarea
                        name="answer5"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer5}
                    />
                </W.FiContent>
            </W.Five>
            <W.Six>
                <W.STitle>5-2. 기획/디자인 트랙 질문<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;자신이 손수 기획하여 만들어보고 싶은 서비스에 대해 간단하게 설명해 주세요.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(500자 이내)</W.STitle>
                <W.SContent>
                    <W.Textarea
                        name="answer5"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.answer5}
                    />
                </W.SContent>
            </W.Six>
            <W.Seven>
                <W.SeTitle>6. 멋쟁이사자처럼 대학은 많은 시간이 투자되어야 합니다. 괜찮으신가요?</W.SeTitle>
                <W.SeContent>
                    <W.Choice>
                        <W.ChoiceInput 
                            type="radio" 
                            name="canSpendTime" 
                            value="True" 
                            checked={formData.canSpendTime === "True"}
                            onChange={handleChange}/> 예
                    </W.Choice>
                    <W.Choice>
                        <W.ChoiceInput 
                            type="radio" 
                            name="canSpendTime" 
                            value="False" 
                            checked={formData.canSpendTime === "False"}
                            onChange={handleChange}/> 아니오
                    </W.Choice>
                </W.SeContent>
            </W.Seven>
            <W.Eight>
                <W.ETitle>7. 깃허브 주소 혹은 블로그 링크 등 포트폴리오</W.ETitle>
                <W.EContent>
                    <W.Textarea
                        name="portfolio"
                        maxLength="500"
                        onInput={TextboxHeight}
                        onChange={handleChange}
                        value={formData.portfolio}
                    />
                </W.EContent>
            </W.Eight>
            <W.Button>
                <W.ReButton onClick={handleEdit}>수정</W.ReButton>
                <W.FnButton onClick={handleSubmit}>최종 제출</W.FnButton>
            </W.Button>
        </W.Content>
        </W.Container>
        </>
    );
};
export default Write;