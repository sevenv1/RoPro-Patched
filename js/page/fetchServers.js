var serverContainerInterval = setInterval(function () {
	serverContainer = document.getElementById('rbx-public-game-server-item-container')
	if (serverContainer != null) {
		servers = $('btroblox') ? $('.rbx-public-game-server-item') : $('.rbx-public-game-server-item:not(.ropro-checked)'); // Deal with BTRoblox server pagination feature compatibility
		for (var i = 0; i < servers.length; i++) {
			var server = servers.get(i)
			try {
				serverProps = angular.element(server).context[Object.keys(angular.element(server).context)[0]].return.memoizedProps
				gameId = serverProps.id
				placeId = serverProps.placeId
				if (gameId.length > 0) {
					if (server.getAttribute('data-gameid') != gameId.replace(/[^a-zA-Z0-9-]/g, '')) {
						server.setAttribute('data-gameid', gameId.replace(/[^a-zA-Z0-9-]/g, ''));
						server.setAttribute('data-placeid', placeId);
						if (server.getElementsByClassName('create-server-link').length > 0 && gameId != server.getElementsByClassName('create-server-link')[0].getAttribute('data-serverid')) {
							server.getElementsByClassName('create-server-link')[0].remove();
							server.classList.remove('ropro-server-invite-added');
							if (server.getElementsByClassName('ropro-server-info').length > 0) {
								server.getElementsByClassName('ropro-server-info')[0].remove();
							}
							if (server.getElementsByClassName('ropro-uptime-info').length > 0) {
								server.getElementsByClassName('ropro-uptime-info')[0].remove();
							}
						}
					}
				}
			} catch (e) {
			}
			servers.get(i).classList.add('ropro-checked')
		}
	}
	serverContainer = document.getElementById('rbx-friends-game-server-item-container')
	if (serverContainer != null) {
		servers = $('.rbx-friends-game-server-item:not(.ropro-checked)')
		for (var i = 0; i < servers.length; i++) {
			var server = servers.get(i)
			try {
				var serverProps = angular.element(server).context[Object.keys(angular.element(server).context)[0]].alternate.return.memoizedProps
				var gameId = serverProps.id
				var placeId = serverProps.placeId
				if (gameId.length > 0) {
					server.setAttribute('data-gameid', gameId)
					server.setAttribute('data-placeid', placeId)
				}
			} catch (e) {
				console.log(e)
			}
			servers.get(i).classList.add('ropro-checked')
		}
	}
	serverContainer = document.getElementById('rbx-private-game-server-item-container')
	if (serverContainer != null) {
		servers = $('.rbx-private-game-server-item:not(.ropro-checked)')
		for (var i = 0; i < servers.length; i++) {
			var server = servers.get(i)
			try {
				var serverProps = angular.element(server).context[Object.keys(angular.element(server).context)[0]].alternate.return.memoizedProps
				var accessCode = serverProps.accessCode
				if (gameId.length > 0) {
					server.setAttribute('data-accesscode', accessCode)
				}
			} catch (e) {
			}
			servers.get(i).classList.add('ropro-checked')
		}
	}
}, 500)