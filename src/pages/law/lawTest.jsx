import React, { useState } from "react";
import Head from "../../components/Head";
import axios from "axios";
import { SERVER_URL } from "../Config";
import Loading from "../../components/Loading";

function LawTest() {
    const [bub1, setBub1] = useState("대법원");
    const [bub2, setBub2] = useState("2023");
    const [bub3, setBub3] = useState("가단");
    const [bub4, setBub4] = useState("");
    const [bub5, setBub5] = useState("");
    const [html, setHtml] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function bub1Change(e) {
        setBub1(e.target.value);
    }
    function bub2Change(e) {
        setBub2(e.target.value);
    }
    function bub3Change(e) {
        setBub3(e.target.value);
    }
    function bub4Change(e) {
        setBub4(e.target.value);
    }
    function bub5Change(e) {
        setBub5(e.target.value);
    }

    function submit() {
        const data = { organ: bub1, year: bub2, devide: bub3, number: bub4, name: bub5 };

        setIsLoading(true);

        axios
            .post(`${SERVER_URL}/api/test/law`, data)
            .then((response) => {
                console.log(response);
                setHtml(response.data.content);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                // 통신 완료 시 isLoading을 false로 설정
                setIsLoading(false);
            });
    }

    return (
        <div>
            <Head></Head>
            <div className="container_wrap">
                담당하는곳
                <select
                    class="graySelect"
                    name="sch_bub_nm"
                    id="sch_bub_nm"
                    title="법원 선택"
                    onChange={bub1Change}>
                    <option value="대법원">대법원</option>
                    <option value="서울고등법원">서울고등법원</option>
                    <option value="서울고등법원(춘천재판부)">서울고등법원(춘천재판부)</option>
                    <option value="서울고등법원(인천재판부)">서울고등법원(인천재판부)</option>
                    <option value="대전고등법원">대전고등법원</option>
                    <option value="대전고등법원(청주재판부)">대전고등법원(청주재판부)</option>
                    <option value="대구고등법원">대구고등법원</option>
                    <option value="부산고등법원">부산고등법원</option>
                    <option value="부산고등법원(창원재판부)">부산고등법원(창원재판부)</option>
                    <option value="부산고등법원(울산재판부)">부산고등법원(울산재판부)</option>
                    <option value="광주고등법원">광주고등법원</option>
                    <option value="광주고등법원(제주재판부)">광주고등법원(제주재판부)</option>
                    <option value="광주고등법원(전주재판부)">광주고등법원(전주재판부)</option>
                    <option value="수원고등법원">수원고등법원</option>
                    <option value="특허법원">특허법원</option>
                    <option value="서울가정법원">서울가정법원</option>
                    <option value="서울행정법원">서울행정법원</option>
                    <option value="서울회생법원">서울회생법원</option>
                    <option value="-">------------</option>
                    <option value="서울중앙지방법원">서울중앙지방법원</option>
                    <option value="서울동부지방법원">서울동부지방법원</option>
                    <option value="서울남부지방법원">서울남부지방법원</option>
                    <option value="서울북부지방법원">서울북부지방법원</option>
                    <option value="서울서부지방법원">서울서부지방법원</option>
                    <option value="-">------------</option>
                    <option value="의정부지방법원">의정부지방법원</option>
                    <option value="고양지원">고양지원</option>
                    <option value="남양주지원">남양주지원</option>
                    <option value="파주시법원">파주시법원</option>
                    <option value="포천시법원">포천시법원</option>
                    <option value="동두천시법원">동두천시법원</option>
                    <option value="가평군법원">가평군법원</option>
                    <option value="연천군법원">연천군법원</option>
                    <option value="철원군법원">철원군법원</option>
                    <option value="-">------------</option>
                    <option value="인천지방법원">인천지방법원</option>
                    <option value="인천지방법원 부천지원">인천지방법원 부천지원</option>
                    <option value="김포시법원">김포시법원</option>
                    <option value="강화군법원">강화군법원</option>
                    <option value="인천가정법원">인천가정법원</option>
                    <option value="인천가정법원 부천지원">인천가정법원 부천지원</option>
                    <option value="-">------------</option>
                    <option value="수원지방법원">수원지방법원</option>
                    <option value="성남지원">성남지원</option>
                    <option value="여주지원">여주지원</option>
                    <option value="평택지원">평택지원</option>
                    <option value="안산지원">안산지원</option>
                    <option value="안양지원">안양지원</option>
                    <option value="용인시법원">용인시법원</option>
                    <option value="오산시법원">오산시법원</option>
                    <option value="광명시법원">광명시법원</option>
                    <option value="안성시법원">안성시법원</option>
                    <option value="광주시법원">광주시법원</option>
                    <option value="양평군법원">양평군법원</option>
                    <option value="이천시법원">이천시법원</option>
                    <option value="수원가정법원">수원가정법원</option>
                    <option value="수원가정법원 성남지원">수원가정법원 성남지원</option>
                    <option value="수원가정법원 여주지원">수원가정법원 여주지원</option>
                    <option value="수원가정법원 평택지원">수원가정법원 평택지원</option>
                    <option value="수원가정법원 안산지원">수원가정법원 안산지원</option>
                    <option value="수원가정법원 안양지원">수원가정법원 안양지원</option>
                    <option value="수원회생법원">수원회생법원</option>
                    <option value="-">------------</option>
                    <option value="춘천지방법원">춘천지방법원</option>
                    <option value="강릉지원">강릉지원</option>
                    <option value="원주지원">원주지원</option>
                    <option value="속초지원">속초지원</option>
                    <option value="영월지원">영월지원</option>
                    <option value="홍천군법원">홍천군법원</option>
                    <option value="양구군법원">양구군법원</option>
                    <option value="삼척시법원">삼척시법원</option>
                    <option value="동해시법원">동해시법원</option>
                    <option value="정선군법원">정선군법원</option>
                    <option value="평창군법원">평창군법원</option>
                    <option value="태백시법원">태백시법원</option>
                    <option value="횡성군법원">횡성군법원</option>
                    <option value="인제군법원">인제군법원</option>
                    <option value="화천군법원">화천군법원</option>
                    <option value="고성군법원">고성군법원</option>
                    <option value="양양군법원">양양군법원</option>
                    <option value="-">------------</option>
                    <option value="대전지방법원">대전지방법원</option>
                    <option value="대전지방법원 홍성지원">대전지방법원 홍성지원</option>
                    <option value="대전지방법원 공주지원">대전지방법원 공주지원</option>
                    <option value="대전지방법원 논산지원">대전지방법원 논산지원</option>
                    <option value="대전지방법원 서산지원">대전지방법원 서산지원</option>
                    <option value="대전지방법원 천안지원">대전지방법원 천안지원</option>
                    <option value="금산군법원">금산군법원</option>
                    <option value="세종특별자치시법원">세종특별자치시법원</option>
                    <option value="보령시법원">보령시법원</option>
                    <option value="서천군법원">서천군법원</option>
                    <option value="예산군법원">예산군법원</option>
                    <option value="아산시법원">아산시법원</option>
                    <option value="태안군법원">태안군법원</option>
                    <option value="당진시법원">당진시법원</option>
                    <option value="부여군법원">부여군법원</option>
                    <option value="청양군법원">청양군법원</option>
                    <option value="대전가정법원">대전가정법원</option>
                    <option value="대전가정법원 홍성지원">대전가정법원 홍성지원</option>
                    <option value="대전가정법원 공주지원">대전가정법원 공주지원</option>
                    <option value="대전가정법원 논산지원">대전가정법원 논산지원</option>
                    <option value="대전가정법원 서산지원">대전가정법원 서산지원</option>
                    <option value="대전가정법원 천안지원">대전가정법원 천안지원</option>
                    <option value="-">------------</option>
                    <option value="청주지방법원">청주지방법원</option>
                    <option value="충주지원">충주지원</option>
                    <option value="제천지원">제천지원</option>
                    <option value="영동지원">영동지원</option>
                    <option value="진천군법원">진천군법원</option>
                    <option value="보은군법원">보은군법원</option>
                    <option value="단양군법원">단양군법원</option>
                    <option value="음성군법원">음성군법원</option>
                    <option value="옥천군법원">옥천군법원</option>
                    <option value="괴산군법원">괴산군법원</option>
                    <option value="-">------------</option>
                    <option value="대구지방법원">대구지방법원</option>
                    <option value="대구지방법원 서부지원">대구지방법원 서부지원</option>
                    <option value="대구지방법원 안동지원">대구지방법원 안동지원</option>
                    <option value="대구지방법원 경주지원">대구지방법원 경주지원</option>
                    <option value="대구지방법원 포항지원">대구지방법원 포항지원</option>
                    <option value="대구지방법원 김천지원">대구지방법원 김천지원</option>
                    <option value="대구지방법원 상주지원">대구지방법원 상주지원</option>
                    <option value="대구지방법원 의성지원">대구지방법원 의성지원</option>
                    <option value="대구지방법원 영덕지원">대구지방법원 영덕지원</option>
                    <option value="경산시법원">경산시법원</option>
                    <option value="칠곡군법원">칠곡군법원</option>
                    <option value="청도군법원">청도군법원</option>
                    <option value="영천시법원">영천시법원</option>
                    <option value="성주군법원">성주군법원</option>
                    <option value="고령군법원">고령군법원</option>
                    <option value="영주시법원">영주시법원</option>
                    <option value="봉화군법원">봉화군법원</option>
                    <option value="구미시법원">구미시법원</option>
                    <option value="문경시법원">문경시법원</option>
                    <option value="예천군법원">예천군법원</option>
                    <option value="청송군법원">청송군법원</option>
                    <option value="군위군법원">군위군법원</option>
                    <option value="울진군법원">울진군법원</option>
                    <option value="영양군법원">영양군법원</option>
                    <option value="대구가정법원">대구가정법원</option>
                    <option value="대구가정법원 안동지원">대구가정법원 안동지원</option>
                    <option value="대구가정법원 경주지원">대구가정법원 경주지원</option>
                    <option value="대구가정법원 포항지원">대구가정법원 포항지원</option>
                    <option value="대구가정법원 김천지원">대구가정법원 김천지원</option>
                    <option value="대구가정법원 상주지원">대구가정법원 상주지원</option>
                    <option value="대구가정법원 의성지원">대구가정법원 의성지원</option>
                    <option value="대구가정법원 영덕지원">대구가정법원 영덕지원</option>
                    <option value="-">------------</option>
                    <option value="부산지방법원">부산지방법원</option>
                    <option value="부산지방법원 동부지원">부산지방법원 동부지원</option>
                    <option value="부산지방법원 서부지원">부산지방법원 서부지원</option>
                    <option value="부산가정법원">부산가정법원</option>
                    <option value="부산회생법원">부산회생법원</option>
                    <option value="-">------------</option>
                    <option value="울산지방법원">울산지방법원</option>
                    <option value="양산시법원">양산시법원</option>
                    <option value="울산가정법원">울산가정법원</option>
                    <option value="-">------------</option>
                    <option value="창원지방법원">창원지방법원</option>
                    <option value="마산지원">마산지원</option>
                    <option value="진주지원">진주지원</option>
                    <option value="통영지원">통영지원</option>
                    <option value="밀양지원">밀양지원</option>
                    <option value="거창지원">거창지원</option>
                    <option value="창원남부시법원">창원남부시법원</option>
                    <option value="김해시법원">김해시법원</option>
                    <option value="함안군법원">함안군법원</option>
                    <option value="의령군법원">의령군법원</option>
                    <option value="사천시법원">사천시법원</option>
                    <option value="남해군법원">남해군법원</option>
                    <option value="하동군법원">하동군법원</option>
                    <option value="거제시법원">거제시법원</option>
                    <option value="고성군법원(경)">고성군법원(경)</option>
                    <option value="창녕군법원">창녕군법원</option>
                    <option value="합천군법원">합천군법원</option>
                    <option value="함양군법원">함양군법원</option>
                    <option value="산청군법원">산청군법원</option>
                    <option value="-">------------</option>
                    <option value="광주지방법원">광주지방법원</option>
                    <option value="광주지방법원 목포지원">광주지방법원 목포지원</option>
                    <option value="광주지방법원 장흥지원">광주지방법원 장흥지원</option>
                    <option value="광주지방법원 순천지원">광주지방법원 순천지원</option>
                    <option value="광주지방법원 해남지원">광주지방법원 해남지원</option>
                    <option value="담양군법원">담양군법원</option>
                    <option value="함평군법원">함평군법원</option>
                    <option value="강진군법원">강진군법원</option>
                    <option value="구례군법원">구례군법원</option>
                    <option value="영광군법원">영광군법원</option>
                    <option value="나주시법원">나주시법원</option>
                    <option value="장성군법원">장성군법원</option>
                    <option value="화순군법원">화순군법원</option>
                    <option value="곡성군법원">곡성군법원</option>
                    <option value="광양시법원">광양시법원</option>
                    <option value="고흥군법원">고흥군법원</option>
                    <option value="여수시법원">여수시법원</option>
                    <option value="보성군법원">보성군법원</option>
                    <option value="무안군법원">무안군법원</option>
                    <option value="영암군법원">영암군법원</option>
                    <option value="완도군법원">완도군법원</option>
                    <option value="진도군법원">진도군법원</option>
                    <option value="광주가정법원">광주가정법원</option>
                    <option value="광주가정법원 목포지원">광주가정법원 목포지원</option>
                    <option value="광주가정법원 장흥지원">광주가정법원 장흥지원</option>
                    <option value="광주가정법원 순천지원">광주가정법원 순천지원</option>
                    <option value="광주가정법원 해남지원">광주가정법원 해남지원</option>
                    <option value="-">------------</option>
                    <option value="전주지방법원">전주지방법원</option>
                    <option value="군산지원">군산지원</option>
                    <option value="정읍지원">정읍지원</option>
                    <option value="남원지원">남원지원</option>
                    <option value="진안군법원">진안군법원</option>
                    <option value="김제시법원">김제시법원</option>
                    <option value="무주군법원">무주군법원</option>
                    <option value="임실군법원">임실군법원</option>
                    <option value="익산시법원">익산시법원</option>
                    <option value="부안군법원">부안군법원</option>
                    <option value="고창군법원">고창군법원</option>
                    <option value="장수군법원">장수군법원</option>
                    <option value="순창군법원">순창군법원</option>
                    <option value="-">------------</option>
                    <option value="제주지방법원">제주지방법원</option>
                    <option value="서귀포시법원">서귀포시법원</option>
                    <option value="-">------------</option>
                    <option value="법원행정처">법원행정처</option>
                </select>
                년도
                <select
                    class="graySelect"
                    name="sel_sa_year"
                    id="sel_sa_year"
                    title="사건년도 선택"
                    onChange={bub2Change}>
                    <option value="2023">2023</option>

                    <option value="2022">2022</option>

                    <option value="2021">2021</option>

                    <option value="2020">2020</option>

                    <option value="2019">2019</option>

                    <option value="2018">2018</option>

                    <option value="2017">2017</option>

                    <option value="2016">2016</option>

                    <option value="2015">2015</option>

                    <option value="2014">2014</option>

                    <option value="2013">2013</option>

                    <option value="2012">2012</option>

                    <option value="2011">2011</option>

                    <option value="2010">2010</option>

                    <option value="2009">2009</option>

                    <option value="2008">2008</option>

                    <option value="2007">2007</option>

                    <option value="2006">2006</option>

                    <option value="2005">2005</option>

                    <option value="2004">2004</option>

                    <option value="2003">2003</option>

                    <option value="2002">2002</option>

                    <option value="2001">2001</option>

                    <option value="2000">2000</option>

                    <option value="1999">1999</option>

                    <option value="1998">1998</option>

                    <option value="1997">1997</option>

                    <option value="1996">1996</option>

                    <option value="1995">1995</option>

                    <option value="1994">1994</option>

                    <option value="1993">1993</option>

                    <option value="1992">1992</option>

                    <option value="1991">1991</option>

                    <option value="1990">1990</option>

                    <option value="1989">1989</option>

                    <option value="1988">1988</option>

                    <option value="1987">1987</option>

                    <option value="1986">1986</option>

                    <option value="1985">1985</option>

                    <option value="1969">1969</option>
                </select>
                구분
                <select
                    class="graySelect"
                    name="sa_gubun"
                    id="sa_gubun"
                    title="사건구분 선택"
                    onChange={bub3Change}>
                    <option value="가단">가단</option>
                    <option value="가합">가합</option>
                    <option value="가소">가소</option>
                    <option value="나">나</option>
                    <option value="머">머</option>
                    <option value="재가단">재가단</option>
                    <option value="재가합">재가합</option>
                    <option value="재가소">재가소</option>
                    <option value="재나">재나</option>
                    <option value="재머">재머</option>
                    <option value="준재가단">준재가단</option>
                    <option value="준재가합">준재가합</option>
                    <option value="준재가소">준재가소</option>
                    <option value="준재나">준재나</option>
                    <option value="준재머">준재머</option>
                    <option value="-"></option>
                    <option value="타기">타기</option>
                    <option value="타배">타배</option>
                    <option value="타인">타인</option>
                    <option value="타채">타채</option>
                    <option value="-"></option>
                    <option value="고단">고단</option>
                    <option value="고합">고합</option>
                    <option value="고정">고정</option>
                    <option value="감고">감고</option>
                    <option value="동고">동고</option>
                    <option value="노">노</option>
                    <option value="감노">감노</option>
                    <option value="동노">동노</option>
                    <option value="보고">보고</option>
                    <option value="보노">보노</option>
                    <option value="보로">보로</option>
                    <option value="보초">보초</option>
                    <option value="전고">전고</option>
                    <option value="전노">전노</option>
                    <option value="전로">전로</option>
                    <option value="전초">전초</option>
                    <option value="재고단">재고단</option>
                    <option value="재고정">재고정</option>
                    <option value="재고합">재고합</option>
                    <option value="재감고">재감고</option>
                    <option value="재고약">재고약</option>
                    <option value="재노">재노</option>
                    <option value="재감노">재감노</option>
                    <option value="초적">초적</option>
                    <option value="초보">초보</option>
                    <option value="초기">초기</option>
                    <option value="초사">초사</option>
                    <option value="감초">감초</option>
                    <option value="로">로</option>
                    <option value="감로">감로</option>
                    <option value="보">보</option>
                    <option value="코">코</option>
                    <option value="초">초</option>
                    <option value="동초">동초</option>
                    <option value="초치">초치</option>
                    <option value="치고">치고</option>
                    <option value="치노">치노</option>
                    <option value="치로">치로</option>
                    <option value="치초">치초</option>
                    <option value="-"></option>
                    <option value="고약">고약</option>
                    <option value="고약전">고약전</option>
                    <option value="-"></option>
                    <option value="차">차</option>
                    <option value="차전">차전</option>
                    <option value="카공">카공</option>
                    <option value="-"></option>
                    <option value="라">라</option>
                    <option value="루">루</option>
                    <option value="브">브</option>
                    <option value="인라">인라</option>
                    <option value="인마">인마</option>
                    <option value="재라">재라</option>
                    <option value="재루">재루</option>
                    <option value="재브">재브</option>
                    <option value="정브">정브</option>
                    <option value="-"></option>
                    <option value="과">과</option>
                    <option value="-"></option>
                    <option value="비단">비단</option>
                    <option value="비합">비합</option>
                    <option value="인">인</option>
                    <option value="인카">인카</option>
                    <option value="책">책</option>
                    <option value="호">호</option>
                    <option value="호기">호기</option>
                    <option value="호명">호명</option>
                    <option value="호파">호파</option>
                    <option value="호협">호협</option>
                    <option value="자">자</option>
                    <option value="재카기">재카기</option>
                    <option value="재카담">재카담</option>
                    <option value="정드">정드</option>
                    <option value="정명">정명</option>
                    <option value="주">주</option>
                    <option value="카열">카열</option>
                    <option value="-"></option>
                    <option value="카조">카조</option>
                    <option value="-"></option>
                    <option value="즈기">즈기</option>
                    <option value="즈단">즈단</option>
                    <option value="즈합">즈합</option>
                    <option value="카">카</option>
                    <option value="카경">카경</option>
                    <option value="재카경">재카경</option>
                    <option value="카구">카구</option>
                    <option value="카기">카기</option>
                    <option value="카단">카단</option>
                    <option value="카담">카담</option>
                    <option value="카명">카명</option>
                    <option value="카불">카불</option>
                    <option value="카소">카소</option>
                    <option value="카임">카임</option>
                    <option value="카정">카정</option>
                    <option value="카합">카합</option>
                    <option value="카기전">카기전</option>
                    <option value="카확">카확</option>
                    <option value="크">크</option>
                    <option value="-"></option>
                    <option value="서">서</option>
                    <option value="동서">동서</option>
                    <option value="재동서">재동서</option>
                    <option value="커">커</option>
                    <option value="동커">동커</option>
                    <option value="성">성</option>
                    <option value="성로">성로</option>
                    <option value="성모">성모</option>
                    <option value="성초">성초</option>
                    <option value="저">저</option>
                </select>
                번호
                <input type="text" onChange={bub4Change} />
                이름
                <input type="text" onChange={bub5Change} />
                <button onClick={submit}>확인버튼</button>
                {isLoading ? (
                    <div>
                        <Loading></Loading>
                    </div>
                ) : (
                    <div
                        style={{
                            background: "#eee",
                            padding: "10px",
                            marginTop: "20px",
                            borderRadius: "10px",
                        }}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                )}
            </div>
        </div>
    );
}

export default LawTest;
