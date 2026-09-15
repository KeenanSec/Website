// Single source of truth for editable content.
// Add a project or change a link here; the page renders from this.

const SOCIALS = [
  { label: 'GitHub',       href: 'https://github.com/keenansec',                 icon: 'github' },
  { label: 'LinkedIn',     href: 'https://linkedin.com/in/keenanmorri',          icon: 'linkedin' },
  { label: 'TryHackMe',    href: 'https://tryhackme.com/p/keenansec',            icon: 'thm' },
  { label: 'Hack The Box',    href: 'https://app.hackthebox.com/profile/keenansec', icon: 'htb' },
  { label: 'CyberDefenders',  href: 'https://cyberdefenders.org/p/keenansec',       icon: 'cyberdefenders' },
  { label: 'Email',           href: 'mailto:contact@keenanmo.me',                   icon: 'mail' },
];

const PROJECTS = [
  { title: 'Wazuh SIEM Stack',     href: '#', desc: 'Hardened SIEM in Docker inside an LXC on Proxmox VE, with active response, dropped capabilities, and isolated networks.' },
  { title: 'Zero-Trust Homelab',   href: '#', desc: 'OPNsense VLAN segmentation, Keycloak 26 federated to Active Directory over LDAPS, Nginx Proxy Manager ingress.' },
  { title: 'OT Anomaly Detection', href: '#', desc: 'ESP32-based Modbus TCP anomaly detection built for VoltHacks, aimed at industrial protocol monitoring.' },
  { title: 'DFIR Writeups',        href: '../blog', desc: 'Volatility memory forensics, Wireshark LLMNR analysis, CloudTrail-via-Splunk, and Android DFIR investigations.' },
  { title: 'Shuffle SOAR Pipeline',href: '#', desc: 'Wazuh-to-SOAR-to-osTicket automation for brute-force response and ticketing.' },
  { title: 'FileBrowser Deployment',href: '#', desc: 'Dockerized self-hosted file service, documented as a GitHub portfolio case study.' },
];
