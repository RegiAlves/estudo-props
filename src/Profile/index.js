import ProfileAbout from "../ProfileAbout";
import ProfileImagens from "../ProfileImagens";
import ProfileNumbers from "../ProfileNumbers";
import ProfileName from "./ProfileName";

export default function Profile() {
  return (
    <div class="row py-5 px-4">
      <div class="col-md-5 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover">
            <ProfileName nome="Mark Williams" cargo="New York" fonte="bold" />
          </div>
          <div class="bg-light p-4 d-flex justify-content-end text-center">
            <ProfileNumbers titulo="Photos" numbers="215" margem="10px" />
            <ProfileNumbers titulo="Followers" numbers="745" margem="10px" />
            <ProfileNumbers titulo="Following" numbers="340" margem="10px" />
          </div>
          <div class="px-4 ">
            <h5 class="mb-0">About</h5>
            <div class="p-4 rounded shadow-sm bg-light">
              <ProfileAbout about="Web Developer" />
              <ProfileAbout about="Lives in New York" />
              <ProfileAbout about="Photographer" />
            </div>
          </div>
          <div class="py-4 px-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h5 class="mb-0">Recent photos</h5>
              <a href="#" class="btn btn-link text-muted">
                Show all
              </a>
            </div>
            <div class="row">
              <ProfileImagens
                src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
              <ProfileImagens
                src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
              <ProfileImagens
                src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
              <ProfileImagens
                src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
                class="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//Parei no profileName
