import { useEffect, useState } from "react";
import styled from "styled-components"

const Write = () => {
	const [values, setValues] = useState({
		nameFile: "파일선택",
		imgFile: null
	});
	const [preview, setPreview] = useState();

	const handleChange = (name, value) => {
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};
	const uploadChange = (e) => {
		const nextValue = e.target.files[0];
		handleChange('imgFile', nextValue)

		const fileName = e.target.value;
		handleChange('nameFile', fileName.split('/').pop().split('\\').pop());
	}

	const handleLoadle = () => {
		if (!values.imgFile) return;
		const nextPreview = URL.createObjectURL(values.imgFile);
		setPreview(nextPreview)
	}

	useEffect(() => {
		handleLoadle();
	},[values])

	return (
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
					<textarea rows="10" placeholder="게시글 작성" className="sc-pnc"></textarea>
				</label>
			</WriteTxt>
		</WriteInner>
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
		& textarea {
			width:100%;
			resize: none;
			padding:10px;
			box-sizing: border-box;
		}
	}
`

export default Write;