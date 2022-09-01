import mongoose from 'mongoose';

const { Schema } = mongoose;

// 스키마 선언
const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String], // 문자열로 이루어진 배열
  publishedDate: {
    type: Date,
    default: Date.now, // 현재 날짜를 기본 값으로 지정
  },
});

// Schema 데이타 형
// String 문자열
// Number 숫자
// Date 날짜
// Buffer 파일을 담을 수 있는 버퍼
// Boolean  true or false
// Mixed  (Schema.Types.Mixed) 어떤 데이타도 넣을 수 있는 형식
// ObjectId (Shhema.Tpes.ObjectId) 객체 아이디 주로 다른 객체를 참조시
// Array 배열 형태의 값

// 모델 생성
const Post = mongoose.model('Post', PostSchema);
export default Post;
