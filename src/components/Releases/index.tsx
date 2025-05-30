import React from "react";

const versions = [
    {
        version: '2.12.1',
        vtag: '2.12.1'
    },
    {
        version: '2.12.0',
        vtag: '2.12.0'
    },
    {
        version: '2.11.1',
        vtag: '2.11.1'
    },
    {
        version: '2.11.0',
        vtag: '2.11.0'
    },
    {
        version: '2.10.1',
        vtag: '2.10.1'
    },
    {
        version: '2.10.0',
        vtag: '2.10.0'
    },
    {
        version: '2.9.0',
        vtag: '2.9.0'
    },
    {
        version: '2.8.0',
        vtag: '2.8.0'
    },
    {
        version: '2.7.0',
        vtag: '2.7.0'
    },
    {
        version: '2.6.0',
        vtag: '2.6.0'
    },
    {
        version: '2.5.1',
        vtag: '2.5.1'
    },
    {
        version: '2.5.0',
        vtag: '2.5.0'
    },
    {
        version: '2.4.0',
        vtag: '2.4.0-incubating'
    },
    {
        version: '2.3.0',
        vtag: '2.3.0-incubating'
    },
    {
        version: '2.2.0',
        vtag: '2.2.0-incubating'
    },
    {
        version: '2.1.0',
        vtag: '2.1.0-incubating'
    },
]

type ReleaseData = {
    name: string,
    archive: string,
    checksum: string,
    signature: string,
}

function createReleaseData(version: string, vtag?: string): ReleaseData {
    const fixedVTag = vtag ?? version;
    const tarballURL = `https://www.apache.org/dyn/closer.lua/kvrocks/${version}/apache-kvrocks-${fixedVTag}-src.tar.gz`
    const signURL = `https://downloads.apache.org/kvrocks/${version}/apache-kvrocks-${fixedVTag}-src.tar.gz`
    return {
        name: fixedVTag,
        archive: tarballURL,
        checksum: `${signURL}.sha512`,
        signature: `${signURL}.asc`,
    };
}

export default function Releases(): JSX.Element {
    const releases = versions.map(({ version, vtag }) => createReleaseData(version, vtag))
    return <>
        <table>
            <thead>
            <tr>
                <th><b>Name</b></th>
                <th><b>Archive</b></th>
                <th><b>Checksum</b></th>
                <th><b>Signature</b></th>
            </tr>
            </thead>
            <tbody>
            {releases.map(v => (
                <tr key={v.name}>
                    <td>{v.name}</td>
                    <td><a href={v.archive}>tarball</a></td>
                    <td><a href={v.checksum}>sha512</a></td>
                    <td><a href={v.signature}>asc</a></td>
                </tr>
            ))}
            </tbody>
        </table>
    </>
}
