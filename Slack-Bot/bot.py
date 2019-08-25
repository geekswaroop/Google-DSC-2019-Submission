from lyrics_extractor import Song_Lyrics
import os
import time
import numpy as np
import re
from slack import WebClient
import datetime

slack_client = WebClient('xoxb-735484844983-735808615622-svNVUfNZU2oVPl5gkQrRwHm4')
RTM_READ_DELAY = 1



if __name__ == "__main__":
    if slack_client.rtm_connect(with_team_state=False):
        print("Starter Bot connected and running!")
        while True:
            try:
                channel, message = parse_bot_commands(slack_client.rtm_read())
                if message:
                    handle_command(channel, message)
                    time.sleep(RTM_READ_DELAY)
            except Exception as e:
                print("Reconnecting..." + str(e))
                slack_client.rtm_connect(with_team_state=False)
    else:
        print("Connection failed. Exception traceback printed above.")