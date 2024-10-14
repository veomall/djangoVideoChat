const APP_ID = 'bd81fd231672426eaaf32e4812424caf';
const CHANNEL = 'main'
const TOKEN = '007eJxTYAg50Sqy8KnKRM8JauI61rNd/AMEnm2SdVodfMAi76rYpFsKDEkpFoZpKUbGhmbmRiZGZqmJiWnGRqkmFoZAnklyYtrpbN70hkBGBre0NlZGBggE8VkYchMz8xgYAJLdHNQ='
let UID

const client = AgoraRTC.createClient({mode: 'rtc', codec: 'vp8'})

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
            <div class="username-wrapper">
                <span class="user-name">My name</span>
            </div>
            <div class="video-player" id="user-${UID}"></div>
        </div>`;
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`);

    await client.publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()
