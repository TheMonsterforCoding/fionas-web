import Link from 'next/link'
import Image from 'next/image'

import UserImg from '../../assets/user.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.actions}>
          <svg
            id="Capa_1"
            enableBackground="new 0 0 512 512"
            height="50"
            viewBox="0 0 512 512"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="m256 286h-90c0 49.629 40.371 90 90 90s90-40.371 90-90z"
                fill="#e6455a"
              />
              <path
                d="m346 286h-90v90c49.629 0 90-40.371 90-90z"
                fill="#b32437"
              />
              <path
                d="m151 106-60-31.794c-55.752 56.112-91 136.437-91 211.794v166c0 33.137 27.863 60 61 60s60-26.863 60-60v-136l30-26.25z"
                fill="#cc7029"
              />
              <path
                d="m421 74.206-60 31.794v180l30 30v136c0 33.137 26.863 60 60 60s61-26.863 61-60v-166c0-75.357-35.248-155.682-91-211.794z"
                fill="#994a0f"
              />
              <path
                d="m287.366 2.554-21.449 117.552 125.083 171.05v-5.156c0-33.135 7.031-58.828 14.473-86.045 7.631-27.92 15.527-56.792 15.527-93.955v-31.794c-34.998-35.225-81.722-63.712-133.634-71.652z"
                fill="#cc7029"
              />
              <path
                d="m224.464 2.576c-51.947 7.989-98.728 36.67-133.464 71.63v31.794c0 37.163 7.896 66.035 15.527 93.955 7.442 27.217 14.473 52.91 14.473 86.045l124.907-164.136z"
                fill="#e68945"
              />
              <circle cx="166" cy="136" fill="#463f3f" r="15" />
              <circle cx="346" cy="136" fill="#352c2c" r="15" />
              <path
                d="m330.912 174.774s0 0 0-.015c-20.391-14.18-32.842-33.75-34.995-54.653l-8.551-117.552c-10.248-1.567-20.68-2.554-31.366-2.554-10.745 0-21.233.992-31.536 2.576 0 0-5.041 85.113-8.557 119.288-2.095 20.493-14.165 38.921-33.955 51.87-38.174 24.947-60.952 66.914-60.952 112.266v30c0 41.353 33.647 75 75 75 6.138 0 11.646-3.735 13.931-9.434l18.853-47.124c2.452-6.127 6.848-10.9 12.217-14.119l14.999-19.323 15 19.323c5.369 3.217 9.765 7.985 12.217 14.105l18.853 47.139c2.284 5.698 7.792 9.433 13.93 9.433 41.353 0 75-33.647 75-75v-24.844c0-46.684-22.456-90.19-60.088-116.382z"
                fill="#fff7cc"
              />
              <path
                d="m283.217 334.428 18.853 47.139c2.284 5.698 7.792 9.433 13.93 9.433 41.353 0 75-33.647 75-75v-24.844c0-46.685-22.456-90.19-60.088-116.382 0 0 0 0 0-.015-20.391-14.18-32.842-33.75-34.995-54.653l-8.551-117.552c-10.248-1.567-20.68-2.554-31.366-2.554v301l15 19.323c5.369 3.217 9.765 7.985 12.217 14.105z"
                fill="#ffe6b3"
              />
              <path
                d="m256 241c-8.291 0-15 6.709-15 15v64.323c4.449-2.67 9.536-4.323 15-4.323s10.551 1.655 15 4.323v-64.323c0-8.291-6.709-15-15-15z"
                fill="#766e6e"
              />
              <path
                d="m271 256c0-8.291-6.709-15-15-15v75c5.464 0 10.551 1.655 15 4.323z"
                fill="#5b5555"
              />
              <g>
                <path
                  d="m263.5 196.02h-7.5-7.5c-23.851-.353-37.5 5.74-37.5 29.98 0 24.814 20.186 45 45 45s45-20.186 45-45c0-24.397-13.652-30.126-37.5-29.98z"
                  fill="#463f3f"
                />
                <path
                  d="m301 226c0-24.397-13.652-30.126-37.5-29.98h-7.5v74.98c24.814 0 45-20.186 45-45z"
                  fill="#352c2c"
                />
              </g>
            </g>
          </svg>

          <Link href="/">Home</Link>
          <a href="#">Sobre nós</a>
          <Link href="/posts/services">Serviços</Link>
          <a href="#">Contato</a>
        </div>

        <Link href="/posts/login">
          <button type="button">
            <Image src={UserImg} />
          </button>
        </Link>
      </div>
    </div>
  )
}
