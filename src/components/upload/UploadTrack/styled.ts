import styled from "@emotion/styled";

export const UploadTrack = styled.div`
  width: 79.4rem;
  height: 43.5rem;
  border-radius: 1.9rem;
  background: #171717;
  label {
    width: 100%;
    height: 100%;

    display: inline-flex;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
export const UploadText = styled.p`
  margin: 35.3rem auto;
`;
