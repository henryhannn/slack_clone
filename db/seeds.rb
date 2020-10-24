# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demouser = User.create(email: 'DemoUser@Demo.com', full_name: 'Demo', password: 'demouser')
channel1 = Channel.create(name: 'general', channel_type: 'group')
channel2 = Channel.create(name: 'announcements', channel_type: 'group')
channel3 = Channel.create(name: 'brainstorming', channel_type: 'group')
channel4 = Channel.create(name: 'media', channel_type: 'group')
channel5 = Channel.create(name: 'event-planning', channel_type: 'group')
channel6 = Channel.create(name: 'frontend-team', channel_type: 'group')
channel7 = Channel.create(name: 'backend-team', channel_type: 'group')
channel8 = Channel.create(name: 'design-team', channel_type: 'group')
channel9 = Channel.create(name: 'meme-team', channel_type: 'group')
channel10 = Channel.create(name: 'red-velvet-team', channel_type: 'group')
channel11 = Channel.create(name: 'running-out-of-channel-name-ideas1', channel_type: 'group')
channel12 = Channel.create(name: 'running-out-of-channel-name-ideas2', channel_type: 'group')
channel13 = Channel.create(name: 'direct1', channel_type: 'direct')
channel14 = Channel.create(name: 'direct2', channel_type: 'direct')
channel15 = Channel.create(name: 'direct3', channel_type: 'direct')
channel16 = Channel.create(name: 'direct4', channel_type: 'direct')
channel17 = Channel.create(name: 'direct5', channel_type: 'direct')
channel18 = Channel.create(name: 'direct6', channel_type: 'direct')
channel19 = Channel.create(name: 'direct7', channel_type: 'direct')