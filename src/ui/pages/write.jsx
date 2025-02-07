import React from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/writeStyles";

const Write = () => {
    const TextboxHeight = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return(
        <W.Container>
        <W.Title>
            <W.TitleContent>지원서 작성</W.TitleContent>
        </W.Title>
        <W.Content>
            <W.One>
                <W.OTitle>1. 멋쟁이사자처럼 대학에 지원하시게 된 이유를 작성해주세요. (500자 이내)</W.OTitle>
                <W.OContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.OContent>
            </W.One>
            <W.Two>
                <W.TwTitle>2. 지원하신 파트를 선택한 이유와 관련된 경험을 해본 적이 있는지,{"\n"}
                    그리고 이 파트를 통해 어떠한 성장을 희망하시는지 작성해주세요. (500자 이내)
                </W.TwTitle>
                <W.TwContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.TwContent>
            </W.Two>
            <W.Three>
                <W.ThTitle>3. 멋쟁이사자처럼 대학은 협업과 팀워크를 중요한 가치로 생각하는 공동체입니다.{"\n"}
                    지원자 본인이 협업 또는 팀워크를 진행해 보았던 경험을 자신이 맡았던 역할 및 협업의 성과를 위주로 작성해 주세요. (500자 이내)
                </W.ThTitle>
                <W.ThContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.ThContent>
            </W.Three>
            <W.Four>
                <W.FoTitle>4. (선택사항) 경험을 멋쟁이사자처럼 대학에서 어떻게 적용시킬 수 있을지 작성해주세요. (300자 이내)</W.FoTitle>
                <W.FoContent>
                    <W.Textarea maxLength="300" onInput={TextboxHeight}/>
                </W.FoContent>
            </W.Four>
            <W.Five>
                <W.FiTitle>5-1. 프론트/백 트랙 질문{"\n"}
                    좋은 개발자는 무엇이라고 생각하시나요?{"\n"}
                    그리고 그러한 개발자가 되기 위해 지원자님께서 현재 혹은 미래에 어떠한 노력을 기울이고 싶으신지 작성해주세요. (500자 이내)</W.FiTitle>
                <W.FiContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.FiContent>
            </W.Five>
            <W.Six>
                <W.STitle>5-2. 기획/디자인 트랙 질문{"\n"}
                    자신이 손수 기획하여 만들어보고 싶은 서비스에 대해 간단하게 설명해 주세요. (500자 이내)</W.STitle>
                <W.SContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.SContent>
            </W.Six>
            <W.Seven>
                <W.SeTitle>6. 멋쟁이사자처럼 대학은 많은 시간이 투자되어야 합니다. 괜찮으신가요?</W.SeTitle>
                <W.SeContent>
                    <W.Choice>
                        <W.ChoiceInput type="radio" name="Time" value="yes"/> 예
                    </W.Choice>
                    <W.Choice>
                        <W.ChoiceInput type="radio" name="Time" value="no"/> 아니오
                    </W.Choice>
                </W.SeContent>
            </W.Seven>
            <W.Eight>
                <W.ETitle>7. 깃허브 주소 혹은 블로그 링크 등 포트폴리오</W.ETitle>
                <W.EContent>
                    <W.Textarea maxLength="500" onInput={TextboxHeight}/>
                </W.EContent>
            </W.Eight>
            <W.Button>
                <W.ReButton>수정</W.ReButton>
                <W.FnButton>최종 제출</W.FnButton>
            </W.Button>
        </W.Content>
        </W.Container>
    );
};
export default Write;