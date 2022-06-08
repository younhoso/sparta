import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components"
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../shared/firebase"
import {createStagramFB} from "../redux/modules/stagram"
import { useDispatch } from "react-redux";

const INITIAL_VALUES = {
	nameFile: "파일선택",
	imgFile: null,
	content: '',
}

const Write = () => {
	const [values, setValues] = useState(INITIAL_VALUES);
	const [preview, setPreview] = useState();
	const [isSubmitting, setIsSubmitting] = useState(true);
	// const storage = getStorage();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleChange = (name, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleInputChange = (e) => { // 인풋박스 value값
    const { name, value } = e.target;
    handleChange(name, value);
  };

	const uploadChange = async (e) => {// 이미지 미리보기 함수
		const nextValue = e.target.files[0];
		handleChange('imgFile', nextValue)

		const fileName = e.target.value;
		handleChange('nameFile', fileName.split('/').pop().split('\\').pop());
	};

	const handleLoadle = () => {// 이미지 미리보기를 위한 파일 URL 만들기
		if (!values.imgFile) return;
		const nextPreview = URL.createObjectURL(values.imgFile);
		setPreview(nextPreview)

		if(values.imgFile && values.content) { //버튼 게시글 작성 버튼 활성화 & 비활성화 조건
			setIsSubmitting(false)
		}else{
			setIsSubmitting(true)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const new_obj = { values, setIsSubmitting, navigate };
		dispatch(createStagramFB(new_obj));
	}	

	useEffect(() => {
		handleLoadle();
	},[values])

	return (
		<form className="ReviewForm" onSubmit={handleSubmit}>
			<WriteInner>
				<label htmlFor="file">업로드</label>
				<input className="upload-name" value={values.nameFile} disabled="disabled" readOnly /> 
				<input type="file" accept="image/png, image/jpeg" id="file" onChange={uploadChange}/>
				<PreviewWrap>
					<div className='PreView'>
						{!preview ? <p>여기에 사진이<br/> 미리보기 됩니다.</p> : <img className="bgImg" src={preview} />}                     
					</div>
				</PreviewWrap>
				<WriteTxt>
					<label>
						<textarea rows="10" placeholder="게시글 작성" name="content" onChange={handleInputChange}></textarea>
					</label>
					<button disabled={isSubmitting}>게시글 작성</button>
				</WriteTxt>					
			</WriteInner>
		</form>
	);
}

const WriteInner = styled.div`
	max-width: 900px; 
	width: 100%;
	margin: 0 auto;
	padding: 20px;
	& label {
		display: inline-block;
		padding: 5px 10px;
		color: #fff;
		vertical-align: middle;
		background-color: #333;
		cursor: pointer;
		border: 1px solid #ebebeb;
		border-radius: 5px;
	}
	& .upload-name {
		display: inline-block;
    padding: .5em .75em;
    font-size: inherit;
    font-family: inherit;
    line-height: normal;
    vertical-align: middle;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: .25em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
		margin-left: 5px;
	}

	& input[type="file"]{
		position: absolute;
		width: 0;
		height: 0;
		padding: 0;
		overflow: hidden;
		border: 0;
	}
`

const PreviewWrap = styled.div`
	margin-top: 20px;
 	& .PreView {
		min-height: 250px;
    border: 1px dashed #ccc;
    margin: 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		& p{
			text-align: center;
			font-size: 12px;
		}
	}
	& .bgImg {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

const WriteTxt = styled.div`
	width: 100%;
	margin-top: 20px;
	& label {
		width: 100%;
		background-color: #fff;
		border: 2px solid #000;
		padding: 0;
		box-sizing: border-box;
		margin-bottom: 10px;
		& textarea {
			width:100%;
			resize: none;
			padding:10px;
			box-sizing: border-box;
		}
	}
	& button {
		width: 100%;
		background-color: #333;
		color: #fff;
		padding: 10px;
		border-radius: 8px;
	}
	& button:disabled {
		opacity: 0.5;
	}
`

export default Write;