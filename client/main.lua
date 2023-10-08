RegisterNuiCallback('ping', function(data, cb)
  local name = data.name

  cb(name)
end)

RegisterCommand('rlnui-open', function()
  SendNUIMessage({
    type = 'open',
    data = {
      name = 'Opennnn'
    }
  })
  SetNuiFocus(true, true)
end, false)

RegisterCommand('rlnui-close', function()
  SendNUIMessage({
    type = 'close',
    data = {
      name = 'Closeddddd'
    }
  })
  SetNuiFocus(false, false)
end, false)
