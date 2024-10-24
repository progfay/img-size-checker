import { FormEventHandler, useCallback, useState } from 'react';

type Props = {
  readonly accept?: HTMLInputElement['accept'];
};

type FileInfo = Pick<File, 'name' | 'type' | 'size'>;

export const FileAnalyzer = ({ accept }: Props) => {
  const [fileInfo, setFileInfo] = useState<FileInfo>();

  const handleChange = useCallback<FormEventHandler<HTMLInputElement>>((e) => {
    const file = e.currentTarget.files?.item(0);
    if (file == null) return;
    setFileInfo({
      name: file.name,
      type: file.type,
      size: file.size,
    });
  }, []);

  return (
    <div className="fileAnalyzer">
      <label>
        accept: {accept ?? 'all'} <br />
        <input type="file" accept={accept} onChange={handleChange} />
      </label>
      <p>type: {fileInfo?.type}</p>
      <p>name: {fileInfo?.name}</p>
      <p>size: {fileInfo?.size}</p>
    </div>
  );
};
