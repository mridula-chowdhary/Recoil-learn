import { useRecoilValue } from "recoil"
import { jobAtom,  meSelector, messagingAtom, networkAtom, notificationAtom } from "../atoms"


function Navbar() {

    const networkNotificationCount = useRecoilValue(networkAtom);
    const jobNoticationCount = useRecoilValue(jobAtom);
    const messageNotification = useRecoilValue(messagingAtom);
    const notification = useRecoilValue(notificationAtom);
    const meNotification = useRecoilValue(meSelector)
  return (
    <div>
      <button>Home</button>
      <button>My network {networkNotificationCount > 99 ? "99+" : networkNotificationCount}</button>
      <button>Jobs {jobNoticationCount} </button>
      <button>Messaging {messageNotification} </button>
      <button>Notification {notification} </button>

      <button>Me {meNotification} </button>
    </div>
  )
}

export default Navbar
