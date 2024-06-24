import { Button } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [imgFile, setImgFile] = useState<string | null>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const [imageList, setImageList] = useState<File[]>([]);
  const onChangeImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageList([...imageList, ...Array.from(e.target.files)]);

      // 2-2 이미지 미리보기
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
  };

  const onClick = () => {
    setImageList([]);
    setImgFile(null);
    navigate(-1);
  };

  return (
    <div className="upload">
      <h1>게시글 올리기</h1>
      <table>
        <tbody>
          <tr>
            <th style={{ width: "20%" }}>제목</th>
            <td>
              <input
                type="text"
                placeholder="제목을 입력해 주세요."
                style={{ width: "90%", height: "40px" }}
              />
            </td>
          </tr>
          <tr>
            <th>게시일</th>
            <td>
              <input type="date" style={{ height: "40px", width: "30%" }} />
            </td>
          </tr>
          <tr>
            <th>대표이미지</th>
            <td>
              {imgFile === null ? (
                <>
                  <label htmlFor="files" className="imgUpload">
                    <div>
                      <p>
                        <small>대표 이미지를 업로드해주세요.</small>
                      </p>
                    </div>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    id="files"
                    multiple
                    ref={imgRef}
                    onChange={onChangeImageInput}
                  />
                </>
              ) : (
                <Button onClick={() => setImgFile(null)}>파일 취소</Button>
              )}

              {/*파일이 있으면 나타나고 없으면 아예 숨기기*/}
              {imgFile === null ? (
                <></>
              ) : (
                <img
                  src={imgFile ? imgFile : undefined}
                  alt="null"
                  style={{
                    width: "50%",
                    height: "50%",
                  }}
                />
              )}
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea
                style={{
                  whiteSpace: "pre-wrap",
                  wordWrap: "break-word",
                  resize: "none",
                  width: "90%",
                  height: "20rem",
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: "flex", padding: "20px 0" }}>
        <Button variant="outlined" color="success">
          등록
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginLeft: 3 }}
          onClick={onClick}
        >
          취소
        </Button>
      </div>
    </div>
  );
}

export default Upload;
