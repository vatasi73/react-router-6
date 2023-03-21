import React from "react";
import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { selectCurrentPost } from "../../store/singlepage/singlepageSelector";
import { loadPostById } from "../../store/singlepage/singlepageAction";
export default function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  const dispatch = useDispatch();
  const post = useSelector(selectCurrentPost);
  useEffect(() => {
    dispatch(loadPostById(id));
  }, [id, dispatch]);

  return (
    <div>
      <button onClick={goBack}>Go Back</button>

      <button onClick={goHome}>Go Home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
}
