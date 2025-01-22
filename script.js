async function main()
{
	const userInfoRequest = await fetch('https://discordlookup.mesalytic.moe/v1/user/258706134850863106');
	const userInfo = await userInfoRequest.json();
	document.querySelector('.avatar').src = userInfo.avatar.link + '?size=1024'
	document.querySelector('.banner').src = userInfo.banner.link.replace('=480', '=1024')
	document.querySelector('h1').innerText = userInfo.global_name
	document.querySelector('h1 + p').innerText = '@' + userInfo.username
}

main();

// document.addEventListener('mousemove', (e) => {
// 	document.body.style.setProperty('--client-x', e.clientX / window.innerWidth - 0.5);
// 	document.body.style.setProperty('--client-y', e.clientY / window.innerHeight - 0.5);
// })