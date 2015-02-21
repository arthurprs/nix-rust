(function() {var implementors = {};
implementors['nix'] = ["<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/posix01/struct.glob_t.html' title='libc::types::os::common::posix01::glob_t'>glob_t</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/posix01/struct.timeval.html' title='libc::types::os::common::posix01::timeval'>timeval</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/posix01/struct.timespec.html' title='libc::types::os::common::posix01::timespec'>timespec</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='http://doc.rust-lang.org/nightly/libc/types/os/common/posix01/enum.timezone.html' title='libc::types::os::common::posix01::timezone'>timezone</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.sockaddr.html' title='nix::sys::socket::sockaddr'>sockaddr</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.sockaddr_storage.html' title='nix::sys::socket::sockaddr_storage'>sockaddr_storage</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.sockaddr_in.html' title='nix::sys::socket::sockaddr_in'>sockaddr_in</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.in_addr.html' title='nix::sys::socket::in_addr'>in_addr</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.sockaddr_in6.html' title='nix::sys::socket::sockaddr_in6'>sockaddr_in6</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/bsd44/struct.in6_addr.html' title='libc::types::os::common::bsd44::in6_addr'>in6_addr</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.ip_mreq.html' title='nix::sys::socket::ip_mreq'>ip_mreq</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/bsd44/struct.ip6_mreq.html' title='libc::types::os::common::bsd44::ip6_mreq'>ip6_mreq</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/bsd44/struct.addrinfo.html' title='libc::types::os::common::bsd44::addrinfo'>addrinfo</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.sockaddr_un.html' title='nix::sys::socket::sockaddr_un'>sockaddr_un</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/common/bsd44/struct.ifaddrs.html' title='libc::types::os::common::bsd44::ifaddrs'>ifaddrs</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/stat/struct.FileStat.html' title='nix::sys::stat::FileStat'>stat</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/arch/posix01/struct.utimbuf.html' title='libc::types::os::arch::posix01::utimbuf'>utimbuf</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/arch/posix01/struct.pthread_attr_t.html' title='libc::types::os::arch::posix01::pthread_attr_t'>pthread_attr_t</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='http://doc.rust-lang.org/nightly/libc/types/os/arch/extra/struct.sockaddr_ll.html' title='libc::types::os::arch::extra::sockaddr_ll'>sockaddr_ll</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/enum.NixError.html' title='nix::NixError'>NixError</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/errno/enum.Errno.html' title='nix::errno::Errno'>Errno</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/errno/enum.Errno.html' title='nix::errno::Errno'>Errno</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.flock.html' title='nix::fcntl::flock'>flock</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.flock.html' title='nix::fcntl::flock'>flock</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.OFlag.html' title='nix::fcntl::OFlag'>OFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/fcntl/struct.FdFlag.html' title='nix::fcntl::FdFlag'>FdFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/mount/struct.MsFlags.html' title='nix::mount::MsFlags'>MsFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/mount/struct.MntFlags.html' title='nix::mount::MntFlags'>MntFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sched/struct.CpuSet.html' title='nix::sched::CpuSet'>CpuSet</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/epoll/struct.EpollEventKind.html' title='nix::sys::epoll::EpollEventKind'>EpollEventKind</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/epoll/enum.EpollOp.html' title='nix::sys::epoll::EpollOp'>EpollOp</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/epoll/struct.EpollEvent.html' title='nix::sys::epoll::EpollEvent'>EpollEvent</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/eventfd/struct.EventFdFlag.html' title='nix::sys::eventfd::EventFdFlag'>EventFdFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/ioctl/struct.Winsize.html' title='nix::sys::ioctl::Winsize'>Winsize</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/signal/signal/struct.SockFlag.html' title='nix::sys::signal::signal::SockFlag'>SockFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/signal/signal/struct.siginfo.html' title='nix::sys::signal::signal::siginfo'>siginfo</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/signal/signal/struct.sigset_t.html' title='nix::sys::signal::signal::sigset_t'>sigset_t</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/signal/struct.SigSet.html' title='nix::sys::signal::SigSet'>SigSet</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.SockFlag.html' title='nix::sys::socket::SockFlag'>SockFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/socket/enum.SockAddr.html' title='nix::sys::socket::SockAddr'>SockAddr</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/socket/struct.linger.html' title='nix::sys::socket::linger'>linger</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/stat/struct.SFlag.html' title='nix::sys::stat::SFlag'>SFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/stat/struct.Mode.html' title='nix::sys::stat::Mode'>Mode</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.Termios.html' title='nix::sys::termios::Termios'>Termios</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.SetArg.html' title='nix::sys::termios::SetArg'>SetArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.FlushArg.html' title='nix::sys::termios::FlushArg'>FlushArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.FlowArg.html' title='nix::sys::termios::FlowArg'>FlowArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.Termios.html' title='nix::sys::termios::Termios'>Termios</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.InputFlags.html' title='nix::sys::termios::InputFlags'>InputFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.OutputFlags.html' title='nix::sys::termios::OutputFlags'>OutputFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.ControlFlags.html' title='nix::sys::termios::ControlFlags'>ControlFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/termios/struct.LocalFlags.html' title='nix::sys::termios::LocalFlags'>LocalFlags</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.SetArg.html' title='nix::sys::termios::SetArg'>SetArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.FlushArg.html' title='nix::sys::termios::FlushArg'>FlushArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/termios/enum.FlowArg.html' title='nix::sys::termios::FlowArg'>FlowArg</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/utsname/struct.UtsName.html' title='nix::sys::utsname::UtsName'>UtsName</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='struct' href='nix/sys/wait/struct.WaitPidFlag.html' title='nix::sys::wait::WaitPidFlag'>WaitPidFlag</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/sys/wait/enum.WaitStatus.html' title='nix::sys::wait::WaitStatus'>WaitStatus</a>","<a class='stability Stable' title='Stable'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> for <a class='enum' href='nix/unistd/enum.Fork.html' title='nix::unistd::Fork'>Fork</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
