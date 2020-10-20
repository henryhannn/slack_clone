export const getChannels = () => (
  $.ajax({
    method: 'GET',
    url: '/api/channels'
  })
);

export const getChannel = (channel_id) => (
  $.ajax({
    method: 'GET',
    url: `/api/channels/${channel_id}`
  })
);

export const createChannel = (channel) => (
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: {channel}
  })
);

export const deleteChannel = (channel_id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channel_id}`
  })
);