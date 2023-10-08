function changePage(contentId) {
  // Hide all
  pages.forEach(page => document.getElementById(page.contentId).classList.add('hidden'));

  // Show the correct one
  const contentDiv = document.getElementById(contentId);
  contentDiv.classList.remove('hidden');
}

function openNui() {
  document.getElementById('rl-fivem-nui-wrapper').classList.remove('hidden');
}

function closeNui() {
  document.getElementById('rl-fivem-nui-wrapper').classList.add('hidden');
}

async function invokeNuiCallback(cbName, data) {
  const response = await fetch(`https://${GetParentResourceName()}/${cbName}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  });
  const responseData = await response.json();

  console.log(`[NUI] ${cbName} response:`, responseData)

  return responseData;
}
