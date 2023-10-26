import React from "react";
import { Container } from "react-bootstrap";
import querystring from "query-string";

const client_id = "0e41b7fe41c34102bdbe641546cf9457";
const redirect_uri = "http://localhost:3000";
const scope =
	"playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-modify user-library-read";
const state = "123";
const AUTH_URL =
	"https://accounts.spotify.com/authorize?" +
	querystring.stringify({
		response_type: "code",
		client_id: client_id,
		scope: scope,
		redirect_uri: redirect_uri,
		state: state,
	});

export default function Login() {
	return (
		<Container
			className="d-flex justify-content-center align-items-center"
			style={{ minHeight: "100vh" }}>
			<a className="btn btn-success btn-lg" href={AUTH_URL}>
				Login with Spotify
			</a>
		</Container>
	);
}
